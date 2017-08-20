using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication4.Models;


namespace WebApplication4.Controllers
{
    public class DoctorsController : Controller
    {
        Medical_ThemeEntities mt = new Medical_ThemeEntities();
        // GET: Doctors
        public ActionResult Index()
        {
            List<Doctor> dc = mt.Doctors.ToList();
            ViewBag.Ibrahim = mt.departmentCountries.ToList();

            return View(dc);

        }
    }
}