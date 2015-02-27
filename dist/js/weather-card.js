System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, WeatherCard;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      WeatherCard = _export("WeatherCard", (function () {
        function WeatherCard(weather) {
          _classCallCheck(this, WeatherCard);

          console.log(this);
        }

        _prototypeProperties(WeatherCard, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("weather");
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
          }
        });

        return WeatherCard;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3dlYXRoZXItY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILFdBQVc7OztBQUZoQixjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxpQkFBVztBQUdaLGlCQUhDLFdBQVcsQ0FHWCxPQUFPO2dDQUhQLFdBQVc7O0FBSXRCLGlCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCOzs2QkFMVyxXQUFXO0FBQ2hCLGtCQUFRO21CQUFBLG9CQUFFO0FBQUUscUJBQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUFFOzs7OztBQU16RCxpQkFBTztpQkFBQSxZQUFHO0FBQ2IscUJBQU8sRUFBQyxFQUFFLEtBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFLLE1BQU0sQ0FBQSxBQUFDLENBQUM7YUFDaEQ7OztBQUVHLGtCQUFRO2lCQUFBLFlBQUc7QUFDZCwwQkFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRzthQUM5Qjs7Ozs7ZUFiVyxXQUFXIiwiZmlsZSI6ImpzL3dlYXRoZXItY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL2pzIn0=