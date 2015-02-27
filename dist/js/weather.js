System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, url, Weather;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://api.openweathermap.org/data/2.5/weather?q=";
      Weather = _export("Weather", (function () {
        function Weather(http) {
          _classCallCheck(this, Weather);

          this.http = http;
          this.location = "Paris";
          this.locations = [];
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
          activate: {
            value: function activate() {},
            writable: true,
            configurable: true
          },
          search: {
            value: function search() {
              var _this = this;
              return this.http.get(url + this.location).then(function (response) {
                var cleanResponse = response.response.replace(/^"|"$/g, "'"),
                    json = JSON.parse(cleanResponse);

                _this.locations.push(json);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Weather;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3dlYXRoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSx5Q0FHakIsR0FBRyxFQUVTLE9BQU87OztBQUxaLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7QUFHakIsU0FBRyxHQUFHLG1EQUFtRDtBQUU3QyxhQUFPO0FBR1IsaUJBSEMsT0FBTyxDQUdQLElBQUk7Z0NBSEosT0FBTzs7QUFJbEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDeEIsY0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDcEI7OzZCQVBXLE9BQU87QUFDWixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFReEMsa0JBQVE7bUJBQUEsb0JBQUcsRUFFVjs7OztBQUVELGdCQUFNO21CQUFBLGtCQUFHOztBQUNSLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzFELG9CQUNDLGFBQWEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO29CQUN4RCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFbEMsc0JBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztlQUMxQixDQUFDLENBQUM7YUFDSDs7Ozs7O2VBckJXLE9BQU8iLCJmaWxlIjoianMvd2VhdGhlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL2pzIn0=