import * as yaml from 'js-yaml';
import * as fs from 'fs';

const configs = yaml.load(fs.readFileSync('.aptos/config.yaml'));

export const NODE_URL = configs.profiles.default.rest_url || 'https://fullnode.devnet.aptoslabs.com';

export const FAUCET_URL = configs.profiles.default.faucet_url || 'https://faucet.devnet.aptoslabs.com';

// Add prefix 0x
export const CONTRACT_ADDRESS = `0x${configs.profiles.default.account}` || "0x1";