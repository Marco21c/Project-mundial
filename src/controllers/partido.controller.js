import Partido from '../models/Partido.js'

export const partidoCtrl = {}

partidoCtrl.addPartido = async (req,res) => {
   try{
   const partido = new Partido(req.body);
   await partido.save();
   res.status(206).json({
    'status':'1',
    'msg': 'Se agrego el partido'
   })
   } catch(error){
      res.status(400).json({
        'status':'0',
        'msg': 'Error al agregar un partido.'
      })
   };
};

partidoCtrl.getPartidos = async(req,res)=> {
    try{
        const partidos = await Partido.find().populate("equipoA").populate("equipoB");
        res.json(partidos);
    }catch(error){
        res.status(400).json({
        'status':'0',
        'msg': 'Error al obtener un partido.'
      })
    }
}
partidoCtrl.getPartido = async(req,res)=> {
    try{
        const partido = await Partido.findById(req.params.id).populate("equipoA").populate("equipoB");
        res.json(partido);
    }catch(error){
        res.status(400).json({
        'status':'0',
        'msg': 'Error al obtener un partido.'
      })
    }
}
partidoCtrl.updatePartido = async (req,res) => {
  try{
       await Partido.findByIdAndUpdate(req.params.id, req.body);
       res.json({
        'status':'1',
        'msg':'Partido modificado'
       })
  }catch(error){
      res.status(400).json({
        'status':'0',
        'msg': 'Error al obtener un partido.'
      })
  }
}

partidoCtrl.updateGolesDelPartido = async (req,res) => {
  try{
      const {golesA,golesB} = req.body;
      const partido = await Partido.findByAndUpdate(req.params.id, {golesA,golesB},{new: true}).populate('equipoA').populate('equipoB');
      
      res.json({ 
        'status': "1",
        'msg': "Goles actualizados correctamente.",
        partido
      })
  }catch(error){
    res.status(400).json({
      'status': '0',
      'msg': 'Error al actualizar goles.'})
  }
}
