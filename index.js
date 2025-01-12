import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import fileupload from "express-fileupload";
import VendorRoute from "./Routes/VendorRoute.js"
import GlRoute from "./Routes/GlRoute.js"
import DepartemenRoute from "./Routes/DepartemenRoute.js"
import TahunRoute from "./Routes/TahunRoute.js"
import InvoiceRoute from "./Routes/InvoiceRoute.js"
import AuthRoute from "./Routes/AuthRoute.js"
dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});


// (async () => {
//   await db.sync();
// })();

// store.sync();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001",
  })
);

app.use(fileupload());
app.use(express.static("public")); 
app.use(express.json());

app.use(VendorRoute);
app.use(GlRoute);
app.use(DepartemenRoute);
app.use(TahunRoute);
app.use(InvoiceRoute);
app.use(AuthRoute);


app.listen(process.env.APP_PORT, () => {
    console.log("server started", process.env.APP_PORT);
  });