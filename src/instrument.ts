// Example from https://docs.sentry.io/platforms/javascript/guides/node/install/esm/
import * as Sentry from "@sentry/node";

// TODO: Set your DSN here
const dsn = "";

Sentry.init({
  debug: true,
  dsn,
  tracesSampleRate: 1.0,
  integrations: [Sentry.rewriteFramesIntegration()],
});
