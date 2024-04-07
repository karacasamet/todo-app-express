import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";

const port = 3000;

// Add your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
