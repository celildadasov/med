using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication4.Models;

namespace WebApplication4.Controllers
{
    public class NewsController : Controller
    {
        Medical_ThemeEntities mt = new Medical_ThemeEntities();

        // GET: News
        public ActionResult Index()
        {
            List<news> ns = mt.news.OrderByDescending(x=>x.news_date).ToList();
            ViewBag.Ibrahim = mt.departmentCountries.ToList();
            return View(ns);
        }
    }
}