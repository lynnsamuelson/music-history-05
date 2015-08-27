app.factory("simple_storage", function() {
  var bucket = {};

  return {
    addJunk: function(key, value) {
      bucket[key] = value;
      return bucket[key];
    },
    getJunk: function(junk) {
      if (bucket.hasOwnProperty(junk)) {
        return bucket[junk];
      }
    }
  };

});