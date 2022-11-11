import usuarios from '../models/Uusuario.js'

class UsuariosController {

  static listarUsuarios = (req, res) => {
    usuarios.find()
      .populate('tag')
      .exec((err, usuarios) => {
        res.status(200).json(usuarios)
      })
  }

  static listarUsuarioPorId = (req, res) => {
    const {id} = req.params

    usuarios.findById(id)
         .populate('tag','valor')  
         .exec((error, usuario) => {
              if(!error) {
                res.status(200).send(usuario)
              }else{
                res.status(400).send({message: `${error.message} - ID não encontrado`})
              }
          })
  }

  static criarUsuario = (req, res) => {
    let usuario = new usuarios(req.body);

    usuario.save((error) => {
      if(!error){
        res.status(201).send(usuario.toJSON())
      }else{
        res.status(500).send({message:`${error.message} - Erro no cadastro do link`})
      }
    })
  }

  static atualizarUsuario = (req, res) => {
    const{id} = req.params;

    usuarios.findByIdAndUpdate(id, {$set: req.body},(error) => {
      if(!error){
        res.status(200).send({message:'Usuario atualizado com sucesso'})
      }else{
        res.status(500).send({message:`${error.message} - Erro ao atualizar usuário.`})
      }
    })
  }

  static excluirUsuario = (req, res) => {
    const {id} = req.params

    usuarios.findByIdAndDelete(id, (error) => {
      if(!error) {
        res.status(200).send({message: 'Usuario removido com sucesso'})
      }else {
        res.status(500).send({message: error.message})
      }
    })

  }

}


export default UsuariosController