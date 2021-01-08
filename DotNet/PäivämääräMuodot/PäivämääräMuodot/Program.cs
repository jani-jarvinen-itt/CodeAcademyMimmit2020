using System;
using System.Globalization;

namespace PäivämääräMuodot
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime tänään = DateTime.Now;

            CultureInfo enUs = new CultureInfo("en-US");
            CultureInfo fr = new CultureInfo("fr");
            CultureInfo enGb = new CultureInfo("en-GB");
            CultureInfo it = new CultureInfo("it");

            Console.WriteLine("Suomi: " + tänään);
            Console.WriteLine("USA: " + tänään.ToString(enUs));
            Console.WriteLine("FR: " + tänään.ToString(fr));
            Console.WriteLine("GB: " + tänään.ToString(enGb));
            Console.WriteLine("IT: " + tänään.ToString(it));
        }
    }
}
