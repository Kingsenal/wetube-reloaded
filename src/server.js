import express from "express";
import morgan  from "morgan";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next();
};

const privateMiddleware = (req, res, next) => { // controller
    const url = req.url;
    if(url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    next();
}
//dd
const handleHome = (req, res) => {
    return res.end();
}

const handleProtected = (req, res) => {
    return res.send("Welcome")
}

app.use(morgan("dev"))
app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected)

app.listen(PORT,  () => console.log(`Server Listening on port http://localhost:${PORT}`)); // 서버가 시작될 때 작동하는 함수. port와 콜백함수가 필요함.