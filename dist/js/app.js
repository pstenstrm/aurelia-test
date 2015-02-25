System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;

          this.router.configure(function (config) {
            config.map([{ route: ["", "weather"], moduleId: "weather", nav: true }, { route: "about", moduleId: "about", nav: true }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELEdBQUc7OztBQUZSLFlBQU0sa0JBQU4sTUFBTTs7Ozs7OztBQUVELFNBQUc7QUFHSixpQkFIQyxHQUFHLENBR0gsTUFBTTtnQ0FITixHQUFHOztBQUlkLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUMvQixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNWLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUMxRCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVUsUUFBUSxFQUFFLE9BQU8sRUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQzFELENBQUMsQ0FBQztXQUNILENBQUMsQ0FBQztTQUNIOzs2QkFaVyxHQUFHO0FBQ1IsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQUU7Ozs7OztlQUR4QixHQUFHIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL2pzIn0=