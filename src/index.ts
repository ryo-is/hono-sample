import { Hono } from 'hono';

import apiRoutes from './api';
import pageRoutes from './page';

const app = new Hono();

app.get('/', (c) => c.text('Hello Hono!'));

app.route('/api', apiRoutes);

app.route('/page', pageRoutes);

export default app;
