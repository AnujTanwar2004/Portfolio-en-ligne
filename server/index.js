import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5050;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "../dist");

app.use(cors());
app.use(express.json());
app.use("/resume", express.static(path.join(__dirname, "../public")));
app.use(express.static(distPath));

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

app.get("/{*splat}", (_, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio app running on port ${PORT}`);
});
