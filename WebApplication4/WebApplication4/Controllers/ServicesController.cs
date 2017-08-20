using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication4.Models;

namespace WebApplication4.Controllers
{
    public class ServicesController : Controller
    {
        Medical_ThemeEntities mt = new Medical_ThemeEntities();

        // GET: Services
        public ActionResult Index()
        {
            List<Service> ser = mt.Services.ToList();
            List<feedback> feed = mt.feedbacks.OrderByDescending(x => x.id).ToList();
            ViewBag.Murtaza = feed;

            return View(ser);
        }
    }
}