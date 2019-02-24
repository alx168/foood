import { Recipe, Ingredient, Direction } from "./interfaces/Recipe";
import mongoose from "mongoose"; 
import { MONGODB_URI_LOCAL, SESSION_SECRET } from "./util/secrets";

const MongoStore = mongo(session);

const mongoUrl = MONGODB_URI_LOCAL;
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});

let ass = new Recipe();

