import express from "express";

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Middleware for parsing JSON (if needed later)
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello via Express!");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Default 404 handler
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
