import { Request, Response } from 'express';
import client from '../db/redisClient.js';

export const TestIndexController = {
    getIndex: async (req: Request, res: Response) => {
        res.send(await client.lRange('roomList', 0, -1));
    }
};

export const getRooms = (req: Request, res: Response) => {
    res.send('Hello from the rooms controller!');
};
