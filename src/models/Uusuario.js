import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema(
  {
    id:{type:String},
    nome:{type:String, required:true},
    cpf:{type:Number, required:true},
    senha:{type:String, required:true}
  }
)

const usuarios = mongoose.model('usuario', usuarioSchema)

export default usuarios