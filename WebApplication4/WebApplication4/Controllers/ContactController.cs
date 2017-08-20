using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication4.Models;

namespace WebApplication4.Controllers
{
    public class ContactController : Controller
    {
        Medical_ThemeEntities mt = new Medical_ThemeEntities();

        // GET: Contact
        public ActionResult Index()
        {

            return View();
        }
        [HttpPost]
        public ActionResult Index(Contact_us ct)
        {
            mt.Contact_us.Add(ct);
            mt.SaveChanges();
            return RedirectToAction("Index");

        }
    }
}