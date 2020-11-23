export var uniqueVariableName = (function () {
  var map = {};

  return {
    set: function (name, value) {
      map[name] = value;
    },
    get: function (name) {
      return map[name];
    },
  };
})();
