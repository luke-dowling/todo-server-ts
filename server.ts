import app from "./src/app";
import mongoose, { connect } from "mongoose";
import "dotenv/config";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;

const database = process.env.DB!.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD || ""
);

(async function () {
  try {
    await connect(database);

    console.log("[database]: connected to db");

    app.listen(PORT, () => {
      console.log(`[server]: Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    console.log("Can't connect to database");
    process.exit(1);
  }
})();
