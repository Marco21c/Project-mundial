import {equipoCtrl} from '../controllers/equipo.controller.js'
import { Router } from "express";

const router = Router();

router.get('/',equipoCtrl.getEquipos);
router.get('/:id',equipoCtrl.getEquipo);

router.post('/',equipoCtrl.addEquipo);

router.put('/:id',equipoCtrl.updateEquipo);

export default router;