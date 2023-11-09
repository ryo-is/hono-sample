import { Hono } from 'hono';

import type { FC } from 'hono/jsx';

const app = new Hono();

const Layout: FC = ({ children }) => (
  <html>
    <body>{children}</body>
  </html>
);

const Top: FC<{ messages: string[] }> = ({
  messages,
}: {
  messages: string[];
}) => (
  <Layout>
    <h1>Hello Hono!</h1>
    <ul>
      {messages.map((message) => (
        <li>{message}!!</li>
      ))}
    </ul>
    <a href="/page/goodbay">Go to GoodBay Page</a>
  </Layout>
);

const Goodbay: FC = () => (
  <Layout>
    <h1>Good Bay!!!</h1>
    <a href="/page">Go to Top Page</a>
  </Layout>
);

app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night'];
  return c.html(<Top messages={messages} />);
});

app.get('/goodbay', (c) => c.html(<Goodbay />));

export default app;
