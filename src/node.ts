import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';

import apiRoutes from './api';
import pageRoutes from './page';

const app = new Hono();

// Static Contents
app.get(
  '/static/*',
  serveStatic({
    root: './',
    rewriteRequestPath: (path) => path.replace(/^\/static/, '/assets/static'),
  }),
);
app.get(
  '/favicon.ico',
  serveStatic({
    path: '/assets/favicon.ico',
  }),
);

// REST-full
app.route('/api', apiRoutes);

// SSR
app.route('/page', pageRoutes);

serve(app);
