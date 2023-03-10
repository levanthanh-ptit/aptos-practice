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

    async function publishCounter() {
      /** sign + submit + wait tx */
      const rawTxn = await client.generateTransaction(acc.address(), {
        function: `0x${CONTRACT_ADDRESS}::counter::publish`,
        arguments: [],
        type_arguments: [],
      });
      const bcsTxn = await client.signTransaction(acc, rawTxn);

      const pendingTxn = await client.submitTransaction(bcsTxn);
      await client.waitForTransaction(pendingTxn.hash, {
        checkSuccess: true,
      });
    }
    await publishCounter();

    async function getCounterValue() {
       /** sign + submit + wait tx */
       const rawTxn = await client.generateTransaction(acc.address(), {
        function: `0x${CONTRACT_ADDRESS}::counter::get_value`,
        arguments: [acc.address()],
        type_arguments: ['address'],
      });
      const bcsTxn = await client.signTransaction(acc, rawTxn);

      const pendingTxn = await client.submitTransaction(bcsTxn);
      await client.waitForTransaction(pendingTxn.hash, {
        checkSuccess: true,
      });
    }
    await getCounterValue();
  }).timeout(9000);
});
