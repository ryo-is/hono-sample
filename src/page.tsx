import { Hono } from "hono";
import type { FC } from "hono/jsx";

const app = new Hono();

const Layout: FC = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>;
        })}
      </ul>
      <a href="/page/goodbay">Go to GoodBay Page</a>
    </Layout>
  );
};

const Goodbay: FC = () => {
  return (
    <Layout>
      <h1>Good Bay!!!</h1>
      <a href="/page">Go to Top Page</a>
    </Layout>
  );
};

app.get("/", (c) => {
  const messages = ["Good Morning", "Good Evening", "Good Night"];
  return c.html(<Top messages={messages} />);
});

app.get("/goodbay", (c) => {
  return c.html(<Goodbay />);
});

export default app;
