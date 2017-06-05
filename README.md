
ClojureScript Node.js HMR with Webpack based on [shadow-cljs](https://github.com/thheller/shadow-cljs/wiki/ClojureScript-for-JS-Devs)
---

> It's simpler to do HMR with shadow-cljs alone https://github.com/minimal-xyz/minimal-shadow-cljs-nodejs

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

```bash
yarn build
```

To get optimized ClojureScript compilation result(need externs support):

```bash
shadow-cljs --release
```

> In real-world projects, you may need to config externs to make `:advanced` mode work.

### License

MIT
