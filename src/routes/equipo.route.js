import {equipoCtrl} from '../controllers/equipo.controller.js'
import { Router } from "express";
import { upload } from "../middlewares/multer.js";

const router = Router();

router.get('/',equipoCtrl.getEquipos);
router.get('/:id',equipoCtrl.getEquipo);

router.post('/', upload.single("img"),equipoCtrl.addEquipo);

router.put('/:id',equipoCtrl.updateEquipo);

export default router;