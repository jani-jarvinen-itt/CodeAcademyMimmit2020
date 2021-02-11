using DataIntegraatioTesti.DatabaseNorthwind;
using System;
using System.Linq;
using System.Collections.Generic;

namespace DataIntegraatioTesti
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            NorthwindContext nwKonteksti = new NorthwindContext();
            DatabaseAdventureWorks.AdventureWorks2016CTP3Context awKonteksti = new
                DatabaseAdventureWorks.AdventureWorks2016CTP3Context();

            List<Customer> nwAsiakkaat = nwKonteksti.Customers.ToList();
            foreach (Customer nwAsiakas in nwAsiakkaat)
            {
                // ...

                awKonteksti.Customers.Add(new DatabaseAdventureWorks.Customer()
                {
                    AccountNumber = nwAsiakas.CustomerId
                    // ...
                });
            }
        }
    }
}
