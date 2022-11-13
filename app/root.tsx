import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { PageLayout } from "./components/page-layout";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito&family=Playfair+Display:wght@700&display=swap",
    },
    { rel: "stylesheet", href: styles },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen w-screen overflow-hidden bg-zinc-800" id="body">
        <PageLayout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </PageLayout>
      </body>
    </html>
  );
}
