//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Appoinment
    {
        public Appoinment()
        {
            this.feedbacks = new HashSet<feedback>();
        }
    
        public int id { get; set; }
        public Nullable<int> departmentCountry_id { get; set; }
        public string surname { get; set; }
        public int phone { get; set; }
        public System.DateTime date_birth { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public System.DateTime appo_date { get; set; }
        public int gender { get; set; }
        public string message { get; set; }
    
        public virtual departmentCountry departmentCountry { get; set; }
        public virtual ICollection<feedback> feedbacks { get; set; }
    }
}