import { Request, Response} from 'express';
import { newErrorResponse, newSuccessResponse } from '../resources/response';
import File from '../models/file.model';

class FileController {
    async GetFiles(req: Request, res: Response) {
    try {
      const { folder_id } = req.query;

      const whereClause = folder_id ? { folder_id: Number(folder_id) } : {};

      const files = await File.findAll({
        where: whereClause,
      });

      if (!files || files.length === 0) {
        // res.status(404).json(newErrorResponse(404, "No files found"));
        res.status(200).json(newSuccessResponse(404, "No files found", {files: []}));
        return;  
      }

        res.status(200)
        .json(newSuccessResponse(200, "Files retrieved successfully ", files));
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json(newErrorResponse(500, "Error fetching files"));
    }
  }
}

export { FileController };