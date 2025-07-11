import express, { Request, Response } from "express";
import "dotenv/config";

import routes from "./routes/appointmentsRoutes";

const app = express();
const PORT = 8989;

app.use(express.json());
app.use("/appointments", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Corner Health Node.js server running on port 8989");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || PORT}`);
});
