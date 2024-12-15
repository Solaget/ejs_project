"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const server = (0, express_1.default)();
server.set("view engine", "ejs");
server.set("views", path_1.default.join("views"));
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.static(path_1.default.join(__dirname, "../public"))); // Adjust path to public folder
server.get("/", (req, res) => {
    res.render("index", { name: "s" });
});
server.get("/login", (req, res) => {
    res.render("login");
});
server.get("*", (req, res) => {
    res.render("not-found");
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
