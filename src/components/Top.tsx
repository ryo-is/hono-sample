import { Layout } from './Layout';

import type { FC } from 'hono/jsx';

type TopProps = { title: string };

export const Top: FC<TopProps> = ({ title }) => (
  <Layout>
    <h1>
      <span>{title}</span>
    </h1>
    <a href="/page/goodbay">Go to GoodBay Page</a>
  </Layout>
);
