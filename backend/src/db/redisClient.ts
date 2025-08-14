import { createClient } from 'redis';
import env from '../env.js';

const client = await createClient({
    url: env.REDIS_URL
}).on('error', (err) => console.error('Redis Client Error', err))
    .connect();

console.log('Connected to Redis');

export default client;