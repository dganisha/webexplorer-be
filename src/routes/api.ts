import { Router, Request, Response } from "express";
// import RouteGrouping from "express-route-grouping";
import { FolderController } from "../controllers/folder.controller";
import { FileController } from "../controllers/file.controller";

const router = Router();
const folderController = new FolderController();
const fileController = new FileController();

//router.get("/v1/folders", (req: Request, res: Response) => folderController.getFolders(req, res));
router.get("/v1/folders", (req: Request, res: Response) => folderController.getDataFolder(req, res));
router.get("/v1/files", (req: Request, res: Response) => fileController.GetFiles(req, res));

export default router;