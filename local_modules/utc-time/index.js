module.exports = {
  now: function() {
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
  }
}
