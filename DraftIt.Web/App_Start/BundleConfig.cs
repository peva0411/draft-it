using System.Web;
using System.Web.Optimization;

namespace DraftIt.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/Site.css",
                      "~/Content/animate.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-route.js",
                "~/Scripts/angular-ui-router.js",
                "~/Scripts/angular-animate.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Angular/app.js",
                "~/Angular/Controllers/*.js",
                "~/Angular/Services/*.js"//,
                //"~/Angular/Directives/*.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/tsApp").Include(
                "~/app/app.module.js",
                "~/app/core/core.module.js",
                "~/app/services/services.module.js",
                "~/app/services/categories.service.js",
                "~/app/categories/categories.module.js",
                "~/app/categories/categories.controller.js",
                "~/app/categories/categories.routes.js"));

        }
    }
}
