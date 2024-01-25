import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import connection from "./database/database";
import router from "./routes/index.routes";
import defaultErrorHandler from "./middlewares/error.middleware";
import fileUpload from "express-fileupload";
import cors from "cors";
import path from "path";

const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use(fileUpload());

app.use(defaultErrorHandler);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", router);

(async () => {
  try {
    await connection();

    app.listen(port, () => {
      console.log(`Server running is port ${port}`);
    });
  } catch (error) {
    console.log("Error connect to db: ", error);
  }
})();
