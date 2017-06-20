
var main = require('../target/client.main');

main.init();
var app = main.start();

if (module.hot) {
  module.hot.accept('../target/client.main', function() {
    // stop currently running version
    main.stop(app);
    main = require('../target/client.main');
    app = main.start();
  });
}
