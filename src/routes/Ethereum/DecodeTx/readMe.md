# Decode Ethereum Tx

A JS tool to decode ethereum txs
. Deployed at https://luoquanquan.github.io/tools/#/Ethereum/DecodeTx

Example Tx:
```
0x02f8728189078506fc23ac008507a1e65d40825208945c3c80db8b05601f46c35b79f5c6ff3ef6f703fc85e8d4a5100080c080a0fcf9285bf62348f8a553ce88b0ff7531936f50625b72dd7559a008b562515cc7a017e51dff3a2cbae464a02a85db14f7b0d607ad40b835976a65aa22176ec9632f
```

It should be decoded to:
```json
{
  "type": "0x2",
  "nonce": "0x7",
  "gasLimit": "0x5208",
  "to": "0x5c3c80db8b05601f46c35b79f5c6ff3ef6f703fc",
  "value": "0xe8d4a51000",
  "data": "0x",
  "v": "0x0",
  "r": "0xfcf9285bf62348f8a553ce88b0ff7531936f50625b72dd7559a008b562515cc7",
  "s": "0x17e51dff3a2cbae464a02a85db14f7b0d607ad40b835976a65aa22176ec9632f",
  "chainId": "0x89",
  "maxPriorityFeePerGas": "0x6fc23ac00",
  "maxFeePerGas": "0x7a1e65d40",
  "accessList": [],
  "isSigned": true,
  "from": "0xfe8dc6394501a35ad1c4833f40f382e55dada4f3"
}
```
