import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.end();
}
//dd
app.get("/", handleHome)

app.listen(PORT,  () => console.log(`Server Listening on port http://localhost:${PORT}`)); // 서버가 시작될 때 작동하는 함수. port와 콜백함수가 필요함.