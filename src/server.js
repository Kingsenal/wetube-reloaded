import express from "express";
import morgan  from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter  from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`Server Listening on port http://localhost:${PORT}`)

app.listen(PORT, handleListening); // 서버가 시작될 때 작동하는 함수. port와 콜백함수가 필요함.