const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Hello from container! Host: ${os.hostname()}`);
});

app.get("/shutdown", (req, res) => {
  res.send("Shutting down the server...");
  console.log("Received shutdown request. Stopping container...");
  process.exit(0); // Keluar dengan kode 0 (sukses)
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
