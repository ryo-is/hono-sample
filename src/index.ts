import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

import apiRoutes from './api';
import pageRoutes from './page';

const app = new Hono();

// Static Contents
app.get('/static/*', serveStatic({ root: './' }));
app.get('/favicon.ico', serveStatic({ path: './favicon.ico' }));

// REST-full
app.route('/api', apiRoutes);

// SSR
app.route('/page', pageRoutes);

export default app;
