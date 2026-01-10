import { Request, Response } from "express";
import { newErrorResponse, newSuccessResponse } from "../resources/response";
import Folder from "../models/folder.model";
import { isNumberObject } from "node:util/types";
import sequelize from "../config/database";
import { QueryTypes } from "sequelize";


class FolderController {
    async getDataFolder(req: Request, res: Response) {
        try {
            const { parent_id } = req.query;
            const parentId = parent_id ? parseInt(parent_id as string, 10) : null;
            
            const folders = await Folder.findAll({
                    where: { parent_id: parentId },
                    include: [
                        {
                            model: Folder,
                            as: 'children',
                            attributes: ["id"],
                            required: false
                        },
                    ],
                });

            if(!folders){
                res.status(404).json(newErrorResponse(404, "No folders found"));
                return;
            }

            const resultData = folders.map(folder => {
                const folderData = folder.toJSON() as any;
                return {
                    ...folderData,
                    hasChildren: folderData.children && folderData.children.length > 0,
                    children: [],
                };
            });

            res
                .status(200)
                .json(
                newSuccessResponse(200, "Folders retrieved successfully", resultData)
                );
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json(newErrorResponse(500, "Error fetching folders"));
        }
    };
}

export { FolderController };