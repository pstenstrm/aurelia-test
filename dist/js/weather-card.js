System.register(["aurelia-framework", "aurelia-http-client"], function (_export) {
  "use strict";

  var Behavior, HttpClient, _prototypeProperties, _classCallCheck, url, WeatherCard;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://restcountries.eu/rest/v1/alpha/";
      WeatherCard = _export("WeatherCard", (function () {
        function WeatherCard(http) {
          _classCallCheck(this, WeatherCard);

          this.http = http;
          this.countryName;

          console.log(this);

          this.getCountryName();
        }

        _prototypeProperties(WeatherCard, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          },
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("weather").withProperty("destroy");
            },
            writable: true,
            configurable: true
          }
        }, {
          celcius: {
            get: function () {
              return Math.round("" + this.weather.main.temp - 273.15);
            },
            configurable: true
          },
          location: {
            get: function () {
              return "" + this.weather.name;
            },
            configurable: true
          },
          icon: {
            get: function () {
              return this.weather.weather[0].icon;
            },
            configurable: true
          },
          description: {
            get: function () {
              return this.weather.weather[0].description;
            },
            configurable: true
          },
          getCountryName: {
            value: function getCountryName() {
              var self = this;

              setTimeout(function () {
                if (("" + self.weather.sys.country).length > 2) {
                  self.countryName = "" + self.weather.sys.country;
                  return;
                }

                self.http.get(url + ("" + self.weather.sys.country)).then(function (response) {
                  var cleanResponse = response.response.replace(/^"|"$/g, ""),
                      json = JSON.parse(cleanResponse);

                  self.countryName = json.name;
                });
              }, 0);
            },
            writable: true,
            configurable: true
          }
        });

        return WeatherCard;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3dlYXRoZXItY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsVUFBVSx5Q0FHakIsR0FBRyxFQUVTLFdBQVc7OztBQU5oQixjQUFRLHFCQUFSLFFBQVE7O0FBQ1IsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUdqQixTQUFHLEdBQUcsd0NBQXdDO0FBRWxDLGlCQUFXO0FBS1osaUJBTEMsV0FBVyxDQUtYLElBQUk7Z0NBTEosV0FBVzs7QUFNdEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLFdBQVcsQ0FBQzs7QUFFakIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWxCLGNBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN0Qjs7NkJBWlcsV0FBVztBQUNoQixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBRTs7OztBQUVqQyxrQkFBUTttQkFBQSxvQkFBRTtBQUFFLHFCQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBV2pGLGlCQUFPO2lCQUFBLFlBQUc7QUFDYixxQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFLLE1BQU0sQ0FBQyxDQUFDO2FBQ3hEOzs7QUFFRyxrQkFBUTtpQkFBQSxZQUFHO0FBQ2QsMEJBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUc7YUFDOUI7OztBQUVHLGNBQUk7aUJBQUEsWUFBRztBQUNWLHFCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUNwQzs7O0FBRUcscUJBQVc7aUJBQUEsWUFBRztBQUNqQixxQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7YUFDM0M7OztBQUVELHdCQUFjO21CQUFBLDBCQUFHO0FBQ2hCLGtCQUNDLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWIsd0JBQVUsQ0FBQyxZQUFXO0FBQ3JCLG9CQUFHLE1BQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFFNUMsc0JBQUksQ0FBQyxXQUFXLFFBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxBQUFFLENBQUM7QUFDakQseUJBQU87aUJBQ1A7O0FBRUQsb0JBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNuRSxzQkFDQyxhQUFhLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztzQkFDdkQsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRWxDLHNCQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzdCLENBQUMsQ0FBQztlQUNILEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDTjs7Ozs7O2VBakRXLFdBQVciLCJmaWxlIjoianMvd2VhdGhlci1jYXJkLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvanMifQ==