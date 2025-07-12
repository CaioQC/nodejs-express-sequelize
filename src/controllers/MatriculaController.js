const Controller = require("./Controller.js")
const PessoaServices = require("../services/PessoaServices.js")
const MatriculaServices = require("../services/MatriculaServices.js")

const pessoaServices = new PessoaServices();
const matriculaServices = new MatriculaServices()

class PessoaController extends Controller {
    constructor(){
        super(pessoaServices)
    }

    async pegaMatriculaPorEstudante(req, res) {
        const { estudante_id } = req.params;
        
        try {
            const listaMatriculasPorEstudante = await matriculaServices.pegaEContaRegistros({
                estudante_id: Number(estudante_id),
                status: "matriculado"
            })
            return res.status(200).json(listaMatriculasPorEstudante);
        } 
        
        catch (erro) {
            return res.status(500).json({ erro: erro.message })
        }
    }
}

module.exports = PessoaController;