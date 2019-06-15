import { ParameterizedContext } from 'koa';

const handleError = async (ctx: ParameterizedContext, next: () => Promise<any>) => {
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
};

export default handleError;
