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
          this.countryName = null;

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
              return ~ ~("" + this.weather.main.temp - 273.15);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3dlYXRoZXItY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsVUFBVSx5Q0FHakIsR0FBRyxFQUVTLFdBQVc7OztBQU5oQixjQUFRLHFCQUFSLFFBQVE7O0FBQ1IsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUdqQixTQUFHLEdBQUcsd0NBQXdDO0FBRWxDLGlCQUFXO0FBS1osaUJBTEMsV0FBVyxDQUtYLElBQUk7Z0NBTEosV0FBVzs7QUFNdEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7O0FBRXhCLGlCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsQixjQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdEI7OzZCQVpXLFdBQVc7QUFDaEIsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7QUFFakMsa0JBQVE7bUJBQUEsb0JBQUU7QUFBRSxxQkFBTyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUFFOzs7OztBQVdqRixpQkFBTztpQkFBQSxZQUFHO0FBQ2IscUJBQU8sRUFBQyxFQUFFLEtBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFLLE1BQU0sQ0FBQSxBQUFDLENBQUM7YUFDaEQ7OztBQUVHLGtCQUFRO2lCQUFBLFlBQUc7QUFDZCwwQkFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRzthQUM5Qjs7O0FBRUcsY0FBSTtpQkFBQSxZQUFHO0FBQ1YscUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3BDOzs7QUFFRyxxQkFBVztpQkFBQSxZQUFHO0FBQ2pCLHFCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQzthQUMzQzs7O0FBRUQsd0JBQWM7bUJBQUEsMEJBQUc7QUFDaEIsa0JBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFYix3QkFBVSxDQUFDLFlBQVc7QUFDckIsb0JBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNuRSxzQkFDQyxhQUFhLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztzQkFDdkQsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRWxDLHNCQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzdCLENBQUMsQ0FBQztlQUNILEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDTjs7Ozs7O2VBM0NXLFdBQVciLCJmaWxlIjoianMvd2VhdGhlci1jYXJkLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvanMifQ==