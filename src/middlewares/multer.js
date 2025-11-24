import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function ( req,file,cb) {
    cb(null,"uploads/");
  }, 
  filename: function (req,file,cb){
    const ext = path.extname(file.originalname);
    const name = Date.now() + ext;
    cb(null,name);
  }
});
 
const fileFilter = (req,file,cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype == "image/png" || file.mimetype === "image/jpg"){
        cb(null,true);
    }else{
        cb(new Error("Tipo de imagen no permitida."),false);
    }
};

export const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter
});