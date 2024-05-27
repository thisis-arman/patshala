// getting-started.js
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
    await mongoose.connect(config.database_url as string);
    
  app.listen(5000, () => {
    console.log(`Example app listening on port ${5000}`);
  });
}

main().catch((err) => console.log(err));