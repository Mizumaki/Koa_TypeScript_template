import compose from 'koa-compose';
import awesomeRouter from './awesomeAPI';

const api = compose([awesomeRouter.routes(), awesomeRouter.allowedMethods()]);

export default api;
