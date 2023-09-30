import { AppProps } from "$fresh/server.ts";
import { AppLinkHeader } from "../components/AppLinkHeader.tsx";
import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>app</title>
      </head>
      <body>
        <AppLinkHeader active="/"/>
        <Component />
      </body>
    </html>
  );
}
