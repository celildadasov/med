﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication4.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class Medical_ThemeEntities : DbContext
    {
        public Medical_ThemeEntities()
            : base("name=Medical_ThemeEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<Appoinment> Appoinments { get; set; }
        public DbSet<author> authors { get; set; }
        public DbSet<blog> blogs { get; set; }
        public DbSet<category> categories { get; set; }
        public DbSet<comment> comments { get; set; }
        public DbSet<Contact_us> Contact_us { get; set; }
        public DbSet<departDoctor> departDoctors { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<departmentCountry> departmentCountries { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<feedback> feedbacks { get; set; }
        public DbSet<news> news { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<sysdiagram> sysdiagrams { get; set; }
        public DbSet<worktime> worktimes { get; set; }
    }
}
