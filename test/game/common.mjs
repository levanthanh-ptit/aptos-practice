import * as yaml from 'js-yaml';
import * as fs from 'fs';

const configs = yaml.load(fs.readFileSync('game/.aptos/config.yaml'));

export const NODE_URL = configs.profiles.default.rest_url || 'https://fullnode.devnet.aptoslabs.com';

export const FAUCET_URL = configs.profiles.default.faucet_url || 'https://faucet.devnet.aptoslabs.com';

// Resource account
export const CONTRACT_ADDRESS = '0x43a6ce3344c8fe1ac4b7061e90f833212161274e4820123ce07cb368207c3e52';
