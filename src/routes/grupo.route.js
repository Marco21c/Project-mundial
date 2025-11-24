import { Router } from "express";
import { gruposCtrl } from "../controllers/grupo.controller.js"

const router = Router();

router.get('/',gruposCtrl.getGrupos);

router.post('/',gruposCtrl.addGrupo);

export default router;