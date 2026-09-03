const express = require("express");
const path = require("path");

const app = express();

// Serve all frontend files
app.use(express.static(__dirname));

// Send index.html for the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`SmartAgri server running on port ${PORT}`);
});
