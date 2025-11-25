import { Router } from "express";
import { partidoCtrl } from "../controllers/partido.controller.js";

const router = Router();

router.get('/',partidoCtrl.getPartidos);
router.get('/:id',partidoCtrl.getPartido);
router.post('/',partidoCtrl.addPartido);
router.put('/:id',partidoCtrl.updatePartido);
router.put('/:id/goles',partidoCtrl.updateGolesDelPartido);

export default router;
