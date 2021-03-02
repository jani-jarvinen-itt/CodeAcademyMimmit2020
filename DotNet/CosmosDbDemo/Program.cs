using System;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;

namespace CosmosDbDemo
{
    class Program
    {
        public static string EndpointUrl { get; } = "https://codeacademymimmit.documents.azure.com/";
        public static string PrimaryKey { get; } = "PPWplZzwOTXes7eMvIKu4rqYkIvkEyf3V62ZGRzMGlY0iYNX4YDqE4PG0z1vL0J1kYstfmnHB92ZweBacUndHw==";

        // The Cosmos client instance
        private static CosmosClient cosmosClient;

        // The database we will create
        private static Database database;

        // The container we will create.
        private static Container container;

        static async Task Main(string[] args)
        {
            Console.WriteLine("Aloitetaan Cosmos DB -tietokannan käsittely.");
            cosmosClient = new CosmosClient(EndpointUrl, PrimaryKey);

            database = await cosmosClient.CreateDatabaseIfNotExistsAsync("Mimmit2021");
            Console.WriteLine("Tietokanta avattu: {0}", database.Id);

            container = await database.CreateContainerIfNotExistsAsync("Testi", "/id");
            Console.WriteLine("Tallennuspaikka avattu: {0}", container.Id);

            OmaLuokka data = new OmaLuokka()
            {
                id = "10000",
                Luku = 1234,
                Nimi = "Maija Möttönen",
                Taulukko = new int[] { 9, 8, 7, 6, 5 }
            };

            ItemResponse<OmaLuokka> vastaus = await container.CreateItemAsync<OmaLuokka>(
                data, new PartitionKey(data.id));

            Console.WriteLine("Tallennettu data tietokantaan: {0}. Resurssikulutus: {1} RU:ta.",
                vastaus.Resource.id, vastaus.RequestCharge);

            Console.WriteLine("Sovelluksen suoritus päätty.");
        }
    }
}
