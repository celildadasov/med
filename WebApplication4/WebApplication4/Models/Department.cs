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
    
    public partial class Department
    {
        public Department()
        {
            this.departDoctors = new HashSet<departDoctor>();
        }
    
        public int id { get; set; }
        public string name { get; set; }
        public string department_about { get; set; }
        public string department_image { get; set; }
        public string department_icon { get; set; }
    
        public virtual ICollection<departDoctor> departDoctors { get; set; }
    }
}
