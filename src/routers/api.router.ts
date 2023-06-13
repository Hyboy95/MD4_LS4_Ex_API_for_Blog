import express from 'express';
import { BlogController } from '../controllers/api.controllers/blog.controller';

export const APIRouter = express.Router();

APIRouter.get('/blog', BlogController.getAllBlog);
APIRouter.get('/blog/:id', BlogController.getDetailBlog);
APIRouter.post('/blog', BlogController.addNewBlog);
APIRouter.put('/blog/:id', BlogController.updateBlog);
APIRouter.delete('/blog/:id', BlogController.deleteBlog);