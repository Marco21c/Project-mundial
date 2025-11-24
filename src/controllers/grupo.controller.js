import Grupo from '../models/Grupo.js';

export const gruposCtrl = {};

gruposCtrl.getGrupos = async (req,res) => {
    try{ 
       const grupos = await Grupo.find().populate("equipo");
       res.json(grupos);
    }catch(error){
        res.status(400).json({
           'status': '0',
           'msg' : 'Error al obtener grupo.' 
        })
    }
}

gruposCtrl.addGrupo = async(req,res) => {
    try{
       const grupo = new Grupo(req.body);      
       await grupo.save();
       res.status(201).json({
         'status':'1',
         'msg': 'grupo agregado.'
       }); 
    }catch(error){
         res.status(400).json({
            'status':'0',
            'msg': 'Error al agregar un grupo.'
         })
    }
}

