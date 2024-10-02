# @sentry/node fails to bundle as ESM

Steps to reproduce:

```
npm install
npm run bundle
```

Results:

```

> sentry-esm-bug@1.0.0 bundle
> rollup -c rollup.config.js


src/instrument.ts → dist/instrument.js...
(!) "this" has been rewritten to "undefined"
https://rollupjs.org/troubleshooting/#error-this-is-undefined
node_modules/@opentelemetry/instrumentation-express/build/src/index.js
15:  * limitations under the License.
16:  */
17: var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
                           ^
18:     if (k2 === undefined) k2 = k;
19:     Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
...and 3 other occurrences
node_modules/@opentelemetry/instrumentation-fs/build/src/index.js
15:  * limitations under the License.
16:  */
17: var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
                           ^
18:     if (k2 === undefined) k2 = k;
19:     Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
...and 3 other occurrences
node_modules/@opentelemetry/instrumentation-undici/build/src/index.js
15:  * limitations under the License.
16:  */
17: var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
                           ^
18:     if (k2 === undefined) k2 = k;
19:     Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
...and 3 other occurrences

...and 45 other files
(!) Missing exports
https://rollupjs.org/troubleshooting/#error-name-is-not-exported-by-module
node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js
wrap is not exported by node_modules/shimmer/index.js
37:         this._config = {};
38:         /* Api to wrap instrumented method */
39:         this._wrap = shimmer.wrap;
                                 ^
40:         /* Api to unwrap instrumented methods */
41:         this._unwrap = shimmer.unwrap;
node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js
unwrap is not exported by node_modules/shimmer/index.js
39:         this._wrap = shimmer.wrap;
40:         /* Api to unwrap instrumented methods */
41:         this._unwrap = shimmer.unwrap;
                                   ^
42:         /* Api to mass wrap instrumented method */
43:         this._massWrap = shimmer.massWrap;
node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js
massWrap is not exported by node_modules/shimmer/index.js
41:         this._unwrap = shimmer.unwrap;
42:         /* Api to mass wrap instrumented method */
43:         this._massWrap = shimmer.massWrap;
                                     ^
44:         /* Api to mass unwrap instrumented methods */
45:         this._massUnwrap = shimmer.massUnwrap;
node_modules/@opentelemetry/instrumentation/build/esm/instrumentation.js
massUnwrap is not exported by node_modules/shimmer/index.js
43:         this._massWrap = shimmer.massWrap;
44:         /* Api to mass unwrap instrumented methods */
45:         this._massUnwrap = shimmer.massUnwrap;
                                       ^
46:         this.setConfig(config);
47:         this._diag = diag.createComponentLogger({
(!) Circular dependency
node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js -> node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider.js -> node_modules/@opentelemetry/sdk-trace-base/build/esm/index.js
[!] RollupError: node_modules/@opentelemetry/instrumentation/build/esm/platform/node/RequireInTheMiddleSingleton.js (27:9): "Hook" is not exported by "node_modules/require-in-the-middle/index.js", imported by "node_modules/@opentelemetry/instrumentation/build/esm/platform/node/RequireInTheMiddleSingleton.js".
https://rollupjs.org/troubleshooting/#error-name-is-not-exported-by-module
node_modules/@opentelemetry/instrumentation/build/esm/platform/node/RequireInTheMiddleSingleton.js (27:9)
25:     throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
26: };
27: import { Hook } from 'require-in-the-middle';
...
```