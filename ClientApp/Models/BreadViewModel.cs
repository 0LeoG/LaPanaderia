namespace la_panaderia.ClientApp.Models
{
    public class BreadViewModel
    {
        public int BreadId{get;set;}
        public string Name { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public string TrimmedName => Name.Replace(" ", "");
    }
}   