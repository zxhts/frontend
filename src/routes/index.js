// 引入路由
import SMERouter from 'sme-router';

const router = new SMERouter('root');

import signin from '../controllers/signin';

import index from '../controllers/index';

router.route('/', signin(router));

router.route('/index', index(router));

export default router;