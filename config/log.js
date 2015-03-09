/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#/documentation/concepts/Logging
 */

var winston = require('winston');
var utcTime = require('utc-time');

module.exports.log = {

  /***************************************************************************
  *                                                                          *
  * Valid `level` configs: i.e. the minimum log level to capture with        *
  * sails.log.*()                                                            *
  *                                                                          *
  * The order of precedence for log levels from lowest to highest is:        *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * You may also set the level to "silent" to suppress all logs.             *
  *                                                                          *
  ***************************************************************************/

  custom: new winston.Logger({
    transports: [
      new (winston.transports.File)({
        level: 'debug',
        filename: './.tmp/test.log',
        json: false,
        formatter: function(args) {
          var header = utcTime.now() + " " + args.level.toUpperCase();
          var app = '<' + 'SELECK' + '-' + 'web' + 'v1.0' + '>';
          var host = '<' + 'hostname' + '>';
          var id = '<' + 'logid' + '>';

          return header + '-' + app + host + id + args.message;
        }
      })
    ]
  })

  // level: 'info'

};
