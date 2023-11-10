import type { FC } from 'hono/jsx';

export const Layout: FC = ({ children }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/static/styles/global.css" type="text/css" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
      />
    </head>
    <body>
      <div
        style={{
          display: 'grid',
          'place-content': 'center',
          'place-items': 'center',
          height: '100vh',
        }}
      >
        <img src="/static/images/hono.png" alt="hono" />
        {children}
      </div>
    </body>
  </html>
);
