import KoaRouter from "koa-router";

const router = new KoaRouter();

router.get('/', (ctx, next) => {
    ctx.body = "hello world"
})

router.get('/error', (ctx, next) => {
    ctx.body = "You were the chosen one!!"
})

export default router;
