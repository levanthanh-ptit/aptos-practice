import { AptosClient, AptosAccount, FaucetClient, CoinClient } from 'aptos';
import { expect } from 'chai';
import { CONTRACT_ADDRESS, FAUCET_URL, NODE_URL } from './common.mjs';

describe('[Game] The 3rd', async () => {
  const client = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
  const coinClient = new CoinClient(client);
  const acc1 = new AptosAccount();
  const acc2 = new AptosAccount();
  const acc3 = new AptosAccount();

  it('Should prepare account', async () => {
    /**
     * @param {AptosAccount} acc
     */
    async function fund(acc) {
      await faucetClient.fundAccount(acc.address(), 100_000_000);
      const balance = await coinClient.checkBalance(acc1);
      expect(balance).is.equal(BigInt(100_000_000));
    }
    await fund(acc1);
    await fund(acc2);
    await fund(acc3);
  }).timeout(100000);

  /**
   * @param {AptosAccount} acc
   */
  async function userBet(acc) {
    const amount = BigInt(1000000);
    const rawTx = await client.generateTransaction(
      acc.address(),
      {
        function: `${CONTRACT_ADDRESS}::the_3rd::bet`,
        arguments: [amount],
        type_arguments: [],
      },
      {
        gas_unit_price: '10000',
        max_gas_amount: '1000000',
      }
    );
    const tx = await client.generateSignSubmitWaitForTransaction(acc, rawTx.payload, { checkSuccess: true });
    console.log({ hash: tx.hash, events: tx.events });
  }

  it('Should allow user 1 bet', async () => userBet(acc1)).timeout(100000);
  it('Should allow user 2 bet', async () => userBet(acc2)).timeout(100000);
  it('Should allow user 3 bet', async () => userBet(acc3)).timeout(100000);

  it('User 1 should loss', async function () {
    const balance = await coinClient.checkBalance(acc1);
    console.log(balance);
    expect(balance < BigInt(100_000_000)).to.be.true;
  }).timeout(100000);
  it('User 2 should loss', async function () {
    const balance = await coinClient.checkBalance(acc2);
    console.log(balance);
    expect(balance < BigInt(100_000_000)).to.be.true;
  }).timeout(100000);
  it('User 1 should won', async function () {
    const balance = await coinClient.checkBalance(acc1);
    console.log(balance);
    expect(balance > BigInt(100_000_000)).to.be.true;
  }).timeout(100000);
});
