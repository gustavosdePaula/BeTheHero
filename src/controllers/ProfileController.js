const connection = require('../database/connection')

module.exports = {

    async index (req, res) {
        const ong_id = req.headers.authorization
        console.log(ong_id)
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')        

        return res.json(incidents)
    },

    async create (req, res) {
        const {title, description, value } = req.body;

        const ong_id = req.headers.authorization

        const [id] = await connection('incidents').insert({
            title, 
            description,
            value,
            ong_id
        })
    
        return res.json( 
            {
                  id         
            }
        );
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