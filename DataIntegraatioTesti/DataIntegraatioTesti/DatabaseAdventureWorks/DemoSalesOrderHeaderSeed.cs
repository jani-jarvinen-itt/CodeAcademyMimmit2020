﻿using System;
using System.Collections.Generic;

#nullable disable

namespace DataIntegraatioTesti.DatabaseAdventureWorks
{
    public partial class DemoSalesOrderHeaderSeed
    {
        public DateTime DueDate { get; set; }
        public int CustomerId { get; set; }
        public int SalesPersonId { get; set; }
        public int BillToAddressId { get; set; }
        public int ShipToAddressId { get; set; }
        public int ShipMethodId { get; set; }
        public int LocalId { get; set; }
    }
}
