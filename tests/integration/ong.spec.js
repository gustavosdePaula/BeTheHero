const request = require('supertest')

const app = require('../../src/app')

const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll( async () => {
        await connection.destroy();
    })
    it('Should be able to create a new NON', async () => {
        const response = await request(app).post('/ongs')
        .send({
            name: "Teste",
            email: "contato@gustavo.com",
            whatsapp: "11999732554",
            city: "São Paulo",
            uf: "SP"
        })
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})