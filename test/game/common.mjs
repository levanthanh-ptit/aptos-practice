import * as yaml from 'js-yaml';
import * as fs from 'fs';

const configs = yaml.load(fs.readFileSync('game/.aptos/config.yaml'));

export const NODE_URL = configs.profiles.default.rest_url || 'https://fullnode.devnet.aptoslabs.com';

export const FAUCET_URL = configs.profiles.default.faucet_url || 'https://faucet.devnet.aptoslabs.com';

// Resource account
export const CONTRACT_ADDRESS = '0x5d27c32271d9c0588584fd3956119c6c77c61835c360caf022c4fe64ee30f65e';
