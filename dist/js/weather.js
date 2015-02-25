System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, Weather;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Weather = _export("Weather", (function () {
        function Weather() {
          _classCallCheck(this, Weather);
        }

        _prototypeProperties(Weather, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          configuration: {
            value: function configuration(http) {
              this.http = http;
            },
            writable: true,
            configurable: true
          },
          activate: {
            value: function activate() {},
            writable: true,
            configurable: true
          }
        });

        return Weather;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3dlYXRoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSx5Q0FFTCxPQUFPOzs7QUFGWixnQkFBVSxzQkFBVixVQUFVOzs7Ozs7O0FBRUwsYUFBTztpQkFBUCxPQUFPO2dDQUFQLE9BQU87Ozs2QkFBUCxPQUFPO0FBQ1osZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBQ3hDLHVCQUFhO21CQUFBLHVCQUFDLElBQUksRUFBRTtBQUNuQixrQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDakI7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRyxFQUVWOzs7Ozs7ZUFSVyxPQUFPIiwiZmlsZSI6ImpzL3dlYXRoZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy9qcyJ9