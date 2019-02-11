using System.Collections.Generic;

namespace la_panaderia.ClientApp.Models
{
    public class Order
    {
        public string Name { get; set; }
        public List<BreadViewModel> OrderBreads{get;set;}
        public decimal Amount { get; set; }
    }
}