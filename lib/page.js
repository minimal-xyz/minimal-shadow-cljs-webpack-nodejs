
var main = require('../compiled/client.main');

main.init();
var app = main.start();

if (module.hot) {
  module.hot.accept('../compiled/client.main', function() {
    // stop currently running version
    main.stop(app);
    main = require('../compiled/client.main');
    app = main.start();
  });
}
