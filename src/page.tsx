import { Hono } from 'hono';

import { Goodbay } from './components/Goodbay';
import { Top } from './components/Top';

const app = new Hono();

app.get('/', (c) => c.html(<Top title="Hello Hono!" />));

app.get('/goodbay', (c) => c.html(<Goodbay />));

export default app;
