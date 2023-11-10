import { Layout } from './Layout';

import type { FC } from 'hono/jsx';

export const Goodbay: FC = () => (
  <Layout>
    <h1>Good Bay!!!</h1>
    <a href="/page">Go to Top Page</a>
  </Layout>
);
