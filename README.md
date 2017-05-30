
ClojureScript Node.js HMR with Webpack
---

> Prototype, based on [shadow-cljs](https://github.com/thheller/shadow-cljs/wiki/ClojureScript-for-JS-Devs)

### Guide

* Development

```bash
yarn
yarn cljs
# use another terminal
yarn dev
# use another terminal
node dist/main.js
```

Edit `src/client/lib.cljs` to see hot replacing.

* Build

To get optimized ClojureScript compilation result:

```bash
yarn cljs-once
```

> In real-world projects, you may need to config externs to make `:advanced` mode work.

### License

MIT
