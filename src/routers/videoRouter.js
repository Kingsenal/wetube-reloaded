import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see); // 숫자만 들어올 수 있게 해주는 정규식
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;