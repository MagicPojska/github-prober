import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/data.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello to GitHub prober API!");
});

app.use("/postdata", postRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
