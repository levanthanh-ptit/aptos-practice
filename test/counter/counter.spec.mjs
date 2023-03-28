import { AptosClient, AptosAccount, FaucetClient, CoinClient } from 'aptos';
import * as assert from 'assert';
import { NODE_URL, FAUCET_URL, CONTRACT_ADDRESS } from './common.mjs';

describe('[counter] publish feature', function () {
  const client = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
  const coinClient = new CoinClient(client);

  beforeEach(async () => {});

  it('happy case', async function () {
    /** Create account */
    const acc = new AptosAccount();
    /** Fund account */
    await faucetClient.fundAccount(acc.address(), 100_000_000);
    assert.equal(await coinClient.checkBalance(acc), 100_000_000);

    const rawPublishTx = await client.generateTransaction(acc.address(), {
      function: `${CONTRACT_ADDRESS}::counter::publish`,
      arguments: [],
      type_arguments: [],
    });
    const publishTx = await client.generateSignSubmitWaitForTransaction(acc, rawPublishTx.payload);
  }).timeout(9000);
});
