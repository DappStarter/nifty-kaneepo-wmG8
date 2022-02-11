require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stove radar ridge protect idea kangaroo army gesture'; 
let testAccounts = [
"0xc110d04da6f5be912e84f0efa3a21bb2aa516b61015d7fb243a30a0db48bfcdb",
"0x6558f57ca80f94a35ce313a213d9b4ff4dbd388f086cc2630b7f7090a675166c",
"0xab90586c7c01769e1ac52582fdd979ba854cf7b5c6828ea1425f2fd8b365e980",
"0x8432a45d4282012eee16e501ec05290f64fb7a4a33526cbdc9baee90d89953d3",
"0x601dfb79bec0a70aed08f0cf1f0492a4c585707cc23c6729843684489f3be281",
"0xf2f2b20adbfd04f82e562ad2aac74ee9ab2b26d5da2042552ea62fd6a2164691",
"0x94dfeaf689b8624152c3935d023b08ad0bd74be527baf927b883f7286f36f2b0",
"0xe86a19a871682c0509fa58db38047dd8018ab4e0486b100216a1cf85c2036319",
"0x92d2436d4b7fc072240af18802235254bb26d33415acd148ba9b6ffb5479310b",
"0xc9ce576b2a411f9f486b9808a44bac5ac2815fb182c6d52e42c35fa1d1a9981f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

