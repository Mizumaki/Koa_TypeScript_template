import KoaRouter from 'koa-router';

const router = new KoaRouter({
  prefix: '/api/awesome',
});

router.get('/', async (ctx, next) => {
  const callAPI = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: 'awesome!!!' };
  };
  const res = await callAPI();
  ctx.body = JSON.stringify(res.data);
});

export default router;
