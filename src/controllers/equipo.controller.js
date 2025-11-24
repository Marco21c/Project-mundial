import Equipo from '../models/Equipo.js'
import Grupo from '../models/Grupo.js'

export const equipoCtrl = {};

equipoCtrl.addEquipo = async(req, res) => {
    try{
       const {nombre, grupo} = req.body;
       const equipo = new Equipo({nombre,grupo});
       await equipo.save();
       if(grupo){
        await Grupo.findByIdAndUpdate(grupo,{
            $push: {equipo: equipo._id}
        })
       }
       res.status(201).json({
        'status':'1',
        'msg': 'Se agrego exitosamente.'
       });

    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg':'Error al crear equipo.'
        });
    }
} ;

equipoCtrl.getEquipo = async (req,res) => {
     try{
       const equipo = await Equipo.findById(req.params.id).populate("grupo");
       res.json(equipo);   
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg':'Error al obtener equipo.'
        });
    }
}
equipoCtrl.updateEquipo = async (req,res) => {
     try{
        await Equipo.findByIdAndUpdate(req.params.id, req.body);
       res.json({
           'status': '1',
           'msg': 'Agente modificado.'
         })
         
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg':'Error al modificar equipo.'
        });
    }
}

equipoCtrl.getEquipos = async (req,res) => {
     try{
       const equipos = await Equipo.find().populate("grupo");
       res.json(equipos);   
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg':'Error al obtener equipos.'
        });
    }
}