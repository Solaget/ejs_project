import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { products } from "./constants/products";
import expressEjsLayouts from "express-ejs-layouts";

const server = express();

// Setup view engine and layouts
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views/pages"));
server.use(expressEjsLayouts);

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Static Files
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.static("node_modules/aos/dist"));

// Routes
server.get("/", (req: Request, res: Response) => {
  res.render("home-page");
});

server.get("/products", (req: Request, res: Response) => {
  res.render("products-page", { products });
});

server.get("/about-us", (req: Request, res: Response) => {
  res.render("about-page");
});

server.get("/contact-us", (req: Request, res: Response) => {
  res.render("contact-page");
});

server.post("/contact-us", (req: Request, res: Response) => {
  try {
    const { fName, email, message } = req.body;

    if (!fName || !email || !message) {
      throw new Error("All inputs are required");
    }

    res.json({ message: "Message sent successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Fallback for unknown routes
server.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).render("not-found-page");
});

server.listen(3000, () => {
  console.log("🚀 Server is running");
  console.log(process.env.NODE_ENV);
});