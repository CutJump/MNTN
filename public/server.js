import express from "express";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + "/"));

app.get("/", function (request, response) {
  response.sendFile(path.resolve(__dirname, "index.html"));
});
app.listen(3000);
console.log("Server start", "http://localhost:3000/");
