using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gamification_MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult AnimalGame()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
