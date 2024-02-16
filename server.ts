import app from "./src/app";
import { connect } from "mongoose";
import "dotenv/config";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;

const database = process.env.DB!.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD || ""
);

const startServer = async function () {
  try {
    await connect(database);

    app.listen(PORT, () => {
      console.log(`[server]: Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    console.log("Can't connect to database");
    process.exit(1);
  }
};

startServer();
