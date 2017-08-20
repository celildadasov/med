using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication4.Models;


namespace WebApplication4.Controllers
{
    public class AppointmentController : Controller
    {
        Medical_ThemeEntities mt = new Medical_ThemeEntities();
        // GET: Appoinment
        public ActionResult Index()
        {
            List<departmentCountry> country = mt.departmentCountries.ToList();
            return View(country);
        }

        [HttpPost]
        public ActionResult Index(Appoinment dp)
        {
            mt.Appoinments.Add(dp);
            mt.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}