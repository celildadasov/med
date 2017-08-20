using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication4.Models;

namespace WebApplication4.Controllers
{
    public class AboutController : Controller
    {
        // GET: About
        Medical_ThemeEntities mt = new Medical_ThemeEntities();

        public ActionResult Index()
        {
            List<Department> dp = mt.Departments.ToList();
            return View(dp);
        }
    }
}