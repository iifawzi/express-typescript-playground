import express, {Request, Response, NextFunction} from "express"
import bodyParser from "body-parser"
import { AppRouter } from "./settings/AppRouter";
import "./controllers/loginController"

const router = AppRouter.getInstance;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

app.listen(3000,()=>{
    console.log("listening on port 3000");
})