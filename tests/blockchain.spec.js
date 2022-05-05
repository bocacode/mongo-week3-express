import { createBlockchain } from '../src/services/blockchain.service';

describe('Blockchain Test Suite', () => {
  it('should create a Blockchain', async () => {
    await createBlockchain({
      name: 'Solana',
      language: 'Rust',
      marketCap: 1,
      supportsSmartContracts: true,
    });
  });
});
