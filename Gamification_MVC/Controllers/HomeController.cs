using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gamification_MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
        public ActionResult AnimalGame()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
        public ActionResult Sentence()
        {
            return View();
        }
        public ActionResult Animal()
        {
            return View();
        }
        public ActionResult Color()
        {
            return View();
        }
        public ActionResult Punctuation()
        {
            return View();
        } 
    }
}
