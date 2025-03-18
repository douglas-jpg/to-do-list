import { MongoClient as Mongo } from 'mongodb';
import { IMongoClient } from '../@types/protocols';

export const MongoClient: IMongoClient = {
    client: null,
    db: null,

    async connect() {
        try {
            
            const uri = process.env.MONGO_URI || '';

            
            // const username = process.env.MONGO_USERNAME || '';
            // const password = process.env.MONGO_PASSWORD || '';
            // const uri = `mongodb://${username}:${password}@mongo:27017`;

            const client = new Mongo(uri);
            await client.connect();

            this.client = client;
            this.db = client.db('tasks');

            console.log('Conectado ao MongoDB com sucesso');
        } catch (error) {
            console.error('Erro ao conectar ao MongoDB:', error);
            throw error;
        }
    },

    async disconnect() {
        if (this.client) {
            await this.client.close();
            this.client = null;
            this.db = null;
            console.log('Conexão com MongoDB encerrada.');
        }
    },
};
