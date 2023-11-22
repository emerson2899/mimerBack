"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("./dist/routes/api"));
const cors_1 = __importDefault(require("cors"));
const mongoDb_1 = require("./dist/database/mongoDb");
// import Nsequelize from './database/bd'
dotenv_1.default.config();
//mongoConnect();
(0, mongoDb_1.home)();
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
//const multer = require('multer');
//const uploadImage = multer({ dest: 'docs/images/' });
//const uploadDoc = multer({ dest: 'docs/doc' });
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use(express_1.default.urlencoded({ extended: true }));
server.use('/api', api_1.default);
server.use((req, res) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado.' });
});
server.listen(process.env.PORT || 3000);
 