init:
	aptos init
	aptos account fund-with-faucet --account default

test-contract:
	aptos move test

publish-contract:
	aptos move test
	aptos move publish --named-addresses project=default