const app = express();
const morgan = require("morgan");

const port = process.env.PORT || 3001;

app.use(express);

app.use(morgan("tiny"));
app.use(express.json());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
