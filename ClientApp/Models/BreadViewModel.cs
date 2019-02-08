namespace la_panaderia.ClientApp.Models
{
    public class BreadViewModel
    {
        public string Name { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public string TrimmedName => Name.Replace(" ", "");
    }
}   