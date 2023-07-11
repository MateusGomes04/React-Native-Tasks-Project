const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.status(200).send("teste Tiao")
})

app.listen(3000, () => {
  console.log("tiao na parada!")
})