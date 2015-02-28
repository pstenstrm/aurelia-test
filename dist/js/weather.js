System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, url, self, Weather;
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

          self = this;
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
          },
          closeCard: {
            value: function closeCard() {
              self.locations.splice(self.locations.indexOf(this.weather), 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3dlYXRoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSx5Q0FHakIsR0FBRyxFQUNILElBQUksRUFFUSxPQUFPOzs7QUFOWixnQkFBVSxzQkFBVixVQUFVOzs7Ozs7O0FBR2pCLFNBQUcsR0FBRyxtREFBbUQ7QUFHN0MsYUFBTztBQUdSLGlCQUhDLE9BQU8sQ0FHUCxJQUFJO2dDQUhKLE9BQU87O0FBSWxCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztBQUVwQixjQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ1o7OzZCQVRXLE9BQU87QUFDWixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFVeEMsa0JBQVE7bUJBQUEsb0JBQUcsRUFFVjs7OztBQUVELGdCQUFNO21CQUFBLGtCQUFHOztBQUNSLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzFELG9CQUNDLGFBQWEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO29CQUN4RCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFbEMsc0JBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztlQUMxQixDQUFDLENBQUM7YUFDSDs7OztBQUVELG1CQUFTO21CQUFBLHFCQUFHO0FBQ1gsa0JBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMvRDs7Ozs7O2VBM0JXLE9BQU8iLCJmaWxlIjoianMvd2VhdGhlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL2pzIn0=