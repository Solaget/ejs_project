import express from "express";
import path from "path";
import { products } from "./constants/products";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views/pages"));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static("node_modules/aos/dist"));

server.use(express.static(path.join(__dirname, "../public"))); // Adjust path to public folder

server.get("/", (req, res) => {
  res.render("home-page");
});

server.get("/products", (req, res) => {
  res.render("products-page", { products });
});

server.get("/login", (req, res) => {
  res.render("login-page");
});

server.get("/about-us", (req, res) => {
  res.render("about-page");
});

server.get("/contact-us", (req, res) => {
  res.render("contact-page");
});

server.get("*", (req, res) => {
  res.render("not-found-page");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
