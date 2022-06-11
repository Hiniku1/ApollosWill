import tailwindUrl from "./styles/tailwind.css"
import carouselUrl from "react-responsive-carousel/lib/styles/carousel.min.css";

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Apollo's Will",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindUrl },
  { rel: "stylesheet", href: carouselUrl },
];


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        
      </head>
      <body className="bg-smooth-pink">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
