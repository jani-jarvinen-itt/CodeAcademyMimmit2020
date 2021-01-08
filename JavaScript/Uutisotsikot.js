const http = require('https');
const url = "https://feeds.yle.fi/uutiset/v1/majorHeadlines/YLE_UUTISET.rss";

http.get(url, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    }
    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });

    res.on('end', () => {
        try {

            // RSS-käsittely
            let aloitusKohta = 0;
            for (let uutisOtsikonIndeksi = 0; uutisOtsikonIndeksi <= 5; uutisOtsikonIndeksi++) {

                const alkuIndeksi = rawData.indexOf("<title>", aloitusKohta);
                if (alkuIndeksi > 0) {
                    const loppuIndeksi = rawData.indexOf("</title>", aloitusKohta);
                    if (loppuIndeksi > alkuIndeksi) {
                        // console.log(`Alku = ${alkuIndeksi}, loppu = ${loppuIndeksi}.`);

                        if (uutisOtsikonIndeksi > 0) {
                            const otsikko = rawData.substring(alkuIndeksi + 7, loppuIndeksi);
                            console.log(`- ${uutisOtsikonIndeksi}: ${otsikko}`);
                        }

                        aloitusKohta = loppuIndeksi + 1;
                    }
                }

            }


            // console.log(rawData);

        } catch (e) {
            console.error(e.message);
        }
    });

}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});