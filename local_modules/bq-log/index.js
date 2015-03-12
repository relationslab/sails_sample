var winston = require('winston');

module.exports = function(opt) {
  var system = opt.system || "node app";
  var subSystem = opt.subSystem || "-";
  var version = opt.version || "0";
  var host = opt.host || "unknown";
  var level = opt.level || "debug";
  var path = opt.path || './.tmp/test.log';
  var toConsole = opt.toConsole || true;

  var now = function() {
    var zeroPadding = function(target) {
      return ('0' + target).slice(-2);
    }

    var now = new Date();
    var date = zeroPadding(now.getUTCFullYear()) + "-"
      + zeroPadding(now.getUTCMonth() + 1) + "-"
      + zeroPadding(now.getDate());
    var time = zeroPadding(now.getUTCHours()) + ":"
      + zeroPadding(now.getUTCMinutes()) + ":"
      + zeroPadding(now.getUTCSeconds());

    return date + "T" + time + "+09:00";
  };

  return new winston.Logger({
    transports: [
      new (winston.transports.File)({
        level: level,
        filename: path,
        json: false,
        formatter: function(args) {
          if (toConsole) {
            console.log(args.message);
          }
          
          var header = now() + " " + args.level.toUpperCase();
          var app = '<' + system + '-' + subSystem + " " + version + '>';

          return header + '-' + app + '<' + host + '>' + '< - >' + args.message;
        }
      })
    ]
  });
};
