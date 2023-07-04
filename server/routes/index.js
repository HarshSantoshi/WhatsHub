import express from 'express';
import {addUser , getUsers} from '../controller/user_controller.js';
import {newChat} from '../controller/chat_controller.js';
import { getChat } from '../controller/chat_controller.js';
import { newMessage } from '../controller/msg_controller.js';
import { fetchMessage } from '../controller/msg_controller.js';
import { saveFile } from '../controller/file_controller.js';
import upload from '../Utility/upload.js';
import { getFile } from '../controller/file_controller.js';

const Route = express.Router();


Route.post('/add',addUser)
Route.get('/users' , getUsers)
Route.post('/conversation/add' , newChat);
Route.post('/conversation/get' , getChat);
Route.post('/message/add' , newMessage);
Route.get('/message/get/:id' , fetchMessage);
Route.post('/file/save', upload.single("file") , saveFile );
Route.get('/file/:filename' ,getFile);
export default Route;