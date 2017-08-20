using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication4.Models;

namespace WebApplication4.Controllers
{
    public class TimetableController : Controller
    {
        Medical_ThemeEntities mt = new Medical_ThemeEntities();
        // GET: Timetable
        public ActionResult Index()
        {
            List<Doctor> dt = mt.Doctors.ToList();
            ViewBag.Ibrahim = mt.departmentCountries.ToList();
            ViewBag.wt = mt.worktimes.ToList();
            return View(dt);
        }
    }
}