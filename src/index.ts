import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import handleAPI from './handleAPI';
import handleError from './handleError';
import http2 from 'http2';
import fs from 'fs';

// const httpsOptions = {
//   key: fs.readFileSync("env/server.key"),
//   cert: fs.readFileSync("env/server.crt")
// };

const app = new Koa();

// error handling
app.use(handleError);
app.use(async (ctx, next) => {
  await next();
  console.log(`${ctx.method} ${ctx.url}`);
});

app.use(serve(path.resolve(__dirname, '../public')));
app.use(handleAPI);

app.on('error', (ctx, err) => {
  console.log(`🚨  Error: ${err.status}`);
  console.log(`Message: ${err.message}`);
});

// const server = http2.createSecureServer(httpsOptions, app.callback());
// server.listen(3000);
console.log('\n\nserver listening on http://localhost:8080\n\n');
app.listen(8080);
