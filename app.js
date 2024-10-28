import express  from 'express';
import todoAPIs from "./src/routes/todo/TodoRoutes.js"
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();
const port = process.env.port??3000;

app.use(cors());

app.use(bodyParser.json());

app.use("/",todoAPIs);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});