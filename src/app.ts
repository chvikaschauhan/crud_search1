import express = require("express");
import "reflect-metadata";
import * as statusController from "./controllers/status";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/",statusController.home);
app.get("/insert",statusController.ins);
app.get("/search",statusController.search);
app.get("/remove",statusController.remove);

// export our app
export default app;