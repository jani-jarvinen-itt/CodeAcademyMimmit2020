const express = require('express')
const app = express()
const cors = require('cors')
const port = 3010

app.use(cors())

app.get('/', (req, res) => {
    const asiakas = {
        nimi: "Antti Asiakas",
        puhelin: "050 98765", osoite: "Kotikatu 12 B"
    }
    res.json(asiakas)
})

app.post('/', (req, res) => {
    console.log("POST-metodia kutsuttu!")
    res.json(100)
})

app.put('/', (req, res) => {
    console.log("PUT-metodia kutsuttu!")
    res.json(true)
})

app.delete('/', (req, res) => {
    console.log("DELETE-metodia kutsuttu!")
    res.sendStatus(403)
    // res.json({ poistettu: "OK" })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})