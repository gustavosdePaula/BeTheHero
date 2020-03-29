const connection = require('../database/connection')

module.exports = {

    async create (req, res) {
        const {id} = req.body;

        const ong = await connection('ongs').
            where("id", id)
            .select("name")
            .first()

        if(!ong) {
            return res.status(400).json({error: "No NON found with this ID"})
        }
    
        return res.json(ong);
    },

    async delete (req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization
        
        // console.log(ong_id)

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

        // console.log(incident.ong_id)

        if(incident.ong_id != ong_id){
            return res.status(401).json({error: "Não autorizado"})
            console.log(ong_id)
        }
        // console.log(ong_id)
        await connection('incidents')
        .where('id', id)
        .select('ong_id').delete()

        return res.status(204).send()
    }
}