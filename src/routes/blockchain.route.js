import { Router } from 'express';
import { createBlockchain } from '../services/blockchain.service.js';

export const blockchainRouter = Router();

blockchainRouter.post('/blockchain', async (req, res) => {
  const blockchain = req.body;
  const id = await createBlockchain(blockchain);
  res.send(id.toString());
});
