import { MongoClient as Mongo } from 'mongodb';
import { IMongoClient } from '../@types/protocols';

export const MongoClient: IMongoClient = {
    client: null,
    db: null,

    async connect() {
        try {
            const url = process.env.MONGO_URL || '';
            const username = process.env.MONGO_USERNAME || '';
            const password = process.env.MONGO_PASSWORD || '';

            const client = new Mongo(
                `mongodb+srv://${username}:${password}${url}`
            );

            await client.connect();

            this.client = client;
            this.db = client.db('tasks');

            console.log('Conectado ao Mongo com sucesso');
        } catch (error) {
            console.error('Erro ao conectar ao Mongo:', error);
            throw error;
        }
    },

    async disconnect() {
        if (this.client) {
            await this.client.close();
            this.client = null;
            this.db = null;
            console.log('Conexao com Mongo encerrada.');
        }
    },
};
