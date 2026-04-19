import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5050;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use("/resume", express.static(path.join(__dirname, "../public")));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, message: "Missing required fields" });
  }

  return res.status(200).json({ ok: true, message: "Message received" });
});

app.get("/api/health", (_, res) => {
  res.json({ ok: true, status: "server-running" });
});

app.listen(PORT, () => {
  console.log(`Portfolio backend running at http://localhost:${PORT}`);
});
