class Controller {
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res){
        try{
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro)
        }

        catch(erro){

        }
    }

    async atualiza(req, res){
        const { id } = req.params;
        const dadosAtualizados = req.body;

        try{
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id))
            if(!foiAtualizado){
                return res.status(400).json({ mensagem: "registro não foi atualizado" });
            }

            return res.status(200).json({ mensagem: "Atualizado com sucesso" })
        }

        catch(erro){
            console.log(erro);
        }
    }
}

module.exports = Controller