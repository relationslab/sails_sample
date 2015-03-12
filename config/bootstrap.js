/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  sails.api = function(controller) {
    var func = {};

    var controller = sails.controllers['api/' + controller];

    for (var key in controller) {
      if (typeof controller[key] === 'function') {
        func[key] = function(key) {
          return function (req, callback) {
            controller[key](req, {
              send: function(result) {
                if (typeof result !== 'object') {
                  return callback(result, null);
                }

                callback(null, result);
              }
            });
          };
        }(key);
      }
    }

    return func;
  };

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
