fund:
	cd ${path} && aptos account fund-with-faucet --account default

unit-test:
	cd ${path} && aptos move test

publish:
	cd ${path} && aptos move publish --named-addresses project=default