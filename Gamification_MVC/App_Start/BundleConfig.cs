using System.Web;
using System.Web.Optimization;

namespace Gamification_MVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //Add All Angular Scripts in the angular bundle.
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/Angular/angular.min.js",
                "~/Scripts/Angular/MainAngular.js",
                "~/Scripts/Angular/Games/WordSentenceGame/SentenceGame.js",
                "~/Scripts/Angular/Games/Animal/AnimalGame.js",
                "~/Scripts/Angular/Games/ColorGame/ColorGame.js",
                "~/Scripts/Angular/Games/Punctuation/PunctuationGame.js"));

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
                      "~/Content/site.css",
                      "~/Content/Animal.css"));
        }
    }
}
