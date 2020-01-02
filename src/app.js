const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require('body-parser');
const routes = require('./routes/index')
const port = 3000;



app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
      extname: 'hbs',
      layoutsDir: __dirname + "/views/layouts",
      defaultLayout: 'main',
      helpers: { 
        className: num => `opt${num + 1}`,
        nodeId: num => `/option/node-${num}`, // num entered is the node id
        tills: num => `/${num}`,
        path:num => `/option/node-1${num}`,// num entered is the array index
        nodes: (index, num) => `/${index}/node-${num}`,
      }, 
    })
);
app.use(express.static("public"));
// app.use((req, res, next) => {
//   res.set('Cache-Control:', 'no-store, no-cache')
//   next()
// })
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(routes)



app.listen(port, () => console.log(`listening at ${port} `));
