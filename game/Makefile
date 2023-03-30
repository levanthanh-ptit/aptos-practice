deploy:
	aptos move create-resource-account-and-publish-package --address-name=source_addr --seed=8 --named-addresses deployer=default

unit_test:
# source_addr = created resource account
	aptos move test --named-addresses deployer=default,source_addr=0258052d2dc3548e3afbaac3afde2c8b36b1ec362366b5391461fa636e4331cb