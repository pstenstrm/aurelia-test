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
            config.map([{ route: "", moduleId: "weather", nav: true, title: "Weather" }, { route: "about", moduleId: "about", nav: true, title: "About the Weather" }]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELEdBQUc7OztBQUZSLFlBQU0sa0JBQU4sTUFBTTs7Ozs7OztBQUVELFNBQUc7QUFHSixpQkFIQyxHQUFHLENBR0gsTUFBTTtnQ0FITixHQUFHOztBQUlkLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUMvQixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNWLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBTyxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUNwRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUM5RSxDQUFDLENBQUM7V0FDSCxDQUFDLENBQUM7U0FDSDs7NkJBWlcsR0FBRztBQUNSLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFEeEIsR0FBRyIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy9qcyJ9