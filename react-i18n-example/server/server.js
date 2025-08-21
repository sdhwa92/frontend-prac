import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/translations/:lang", (req, res) => {
  const lang = req.params.lang;

  // language-location
  const filePath = path.join(
    __dirname,
    "translations",
    `${lang.split("-")[0]}.json`
  );

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json({ error: "Translation file not found" });
    }

    try {
      const jsonData = JSON.parse(data);
      res.set("Cache-Control", "public, max-age=3600");
      res.json(jsonData);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
