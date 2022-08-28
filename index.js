const validate = require("./middleware/app.js");
const express = require("express");
const app = express();
const PORT = 7000;
app.use(express.json());

app.use(validate);

const moviedata = [
    {
        id:1,
        name:"Bahubali",
        rating:4.5,
        description:"Great empire of Mahismati",
        genre:"action",
        cast:"Prabhas"
    },
];

app.post("/movie", (req, res) => {
  const { data } = req.body;
  try {
    moviedata.push(data);
    res.send("Movie successfully added.");
  } catch (error) {
    res.status(500).send("OOps! something went wrong");
  }
});

app.get("/", (req, res) => {
  res.send(moviedata);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
