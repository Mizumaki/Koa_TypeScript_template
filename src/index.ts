import Koa from 'koa';
import router from './router';
import http2 from 'http2';
import fs from 'fs';

// const httpsOptions = {
//   key: fs.readFileSync("env/server.key"),
//   cert: fs.readFileSync("env/server.crt")
// };

const app = new Koa();

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.app.emit('error', ctx, { status: 404, message: 'You f**ked up' });
    }
  } catch (err) {
    console.log('error', err);
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', ctx, err);
  }
});

app.on('error', (ctx, err) => {
  console.log(`🚨  Error 🚨 : ${err.status}`);
  console.log(`Message: ${err.message}`);
});

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(router.routes());

// const server = http2.createSecureServer(httpsOptions, app.callback());
// server.listen(3000);
app.listen(8080);
