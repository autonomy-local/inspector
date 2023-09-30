import { AppProps } from "$fresh/server.ts";
import { AppLinkHeader } from "../components/AppLinkHeader.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>app</title>
      </head>
      <body>
        <AppLinkHeader />
        <Component />
      </body>
    </html>
  );
}
