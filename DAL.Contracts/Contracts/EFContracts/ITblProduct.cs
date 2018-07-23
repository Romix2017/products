namespace DAL.Contracts.EFContracts
{
    public interface ITblProduct
    {
        int Id { get; set; }
        string Name { get; set; }
        decimal Price { get; set; }
    }
}