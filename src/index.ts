import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

import apiRoutes from './api';
import pageRoutes from './page';

const app = new Hono();

app.get('/', (c) => c.text('Hello Hono!'));

app.get('/static/*', serveStatic({ root: './' }));
app.get('/favicon.ico', serveStatic({ path: './favicon.ico' }));

app.route('/api', apiRoutes);

app.route('/page', pageRoutes);

export default app;
