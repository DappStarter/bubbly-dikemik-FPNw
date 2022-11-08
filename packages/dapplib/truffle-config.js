require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rate pizza hole hope ensure slot genuine'; 
let testAccounts = [
"0x29eeda68bd0356ad369ca94c7d50c98d875e9510977df020b5d40b552fd4fff9",
"0xc18d9ba9c8f294d46d6dbef74b91ee818c484a186144f412e70bcd5b2708f6b0",
"0x3080c50266edf16abecba67b710d6179d1ce4985128ffee9917f66f448257cb3",
"0xae6a18d1d8c439eab428444b8a7ab3a8852aa14288a9aad002123e93d1dc8582",
"0xc077dcc717ece45887f1077fda08de0b46430ed1e85afabe1e849809a64db736",
"0xaaf0e00016f15b7f915a261d58601c0c7c1e0ff0bde669af65751db21a3e89ab",
"0x4672aba0a0ccea41b53704a181bb16b28f1440fdaf2da5d758cd1f2a4afddc2a",
"0xa8a9f42f6160f4615d55ad343be4ce075409c5f9f5e6b1aa4f0dd8bdc5e5a2a5",
"0x8b38dffd8045c4ec80a9adbe6dd12c59161fdff623fcd2bf988657164034a3cd",
"0x83c6921acab51453994027cb71711c1580c6c4d56ed713486b2665336cdb9203"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


