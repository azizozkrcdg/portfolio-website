import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import methodOverride from "method-override";
import { connectDB } from "./config/db.js";
import indexRoute from "./routes/admin/indexRoute.js";
import siteRoute from "./routes/site/siteRoute.js";
import adminAuthRoute from "./routes/admin/adminAuthRoute.js";


const app = express();
dotenv.config();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(methodOverride("_method"));


app.use(express.static("public"));
app.use('/site', express.static('site'));
app.use("/uploads", express.static("public/uploads"));
app.set("view engine", "ejs");

//admin index routes
app.use("/admin/auth", adminAuthRoute);
app.use("/admin", indexRoute);
app.use("/", siteRoute);

const port = process.env.PORT;

app.listen(port, '0.0.0.0',() => {
  console.log(`Server ${port} portunda çalıştı.`);
  connectDB();
});