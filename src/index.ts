import express, { Request, Response } from "express";

const app = express();
const PORT = 8989;

app.get("/", (req: Request, res: Response) => {
  res.send("Corner Health Node.js server running on port 8989");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
