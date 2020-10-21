// Source code to interact with smart contract

// web3 provider with fallback for old version
//window.addEventListener('load', () => {
// New web3 provider
/*if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
        // ask user for permission
        await ethereum.enable();
        // user approved permission
    } catch (error) {
        // user rejected permission
        console.log('user rejected permission');
    }
}
// Old web3 provider
else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // no need to ask for permission
}
// No web3 provider
else {
    console.log('No web3 provider detected');
}*/
//web3.eth.getBlock('latest').then(answer => console.log(answer))
//web3.eth.getBlockNumber().then(blockNum => console.log(blockNum))
const contractAddress = '0x8540EDCAa8FB540fcC61A02e130A6fA1998C5730';
const abi = JSON.parse('[{"constant": false,"inputs": [{"name": "_string","type": "string"}],"name": "set","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [{"name": "_initstring","type": "string"}],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"constant": true,"inputs": [],"name": "get","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"}]');

//Smart contract functions
const registerSetInfo = () => {
    if (window.ethereum) {
        // ask user for permission
        ethereum.enable().then(() => {
            let web3 = new Web3(ethereum);
            web3.eth.getAccounts(function (err, accounts) {
                if (err != null) {
                    alert("Error retrieving accounts.");
                    return;
                }
                if (accounts.length == 0) {
                    alert("No account found! Make sure the Ethereum client is configured properly.");
                    return;
                }
                account = accounts[0];
                console.log('Account: ' + account);
                web3.eth.defaultAccount = account;
                info = $("#newInfo").val();
                let contract = new web3.eth.Contract(abi, contractAddress);
                contract.methods.set(info).send({ from: account }).then(function (tx) {
                    console.log("Transaction: ", tx);
                }).catch((e) => {
                    console.log("Error: ", e)
                });
                $("#newInfo").val('');
                console.log('Contract: ', contract.methods);
            });
        }).catch((e) => {
            console.log('Rejected.', e);
        });
    }




}

const registerGetInfo = () => {
    let web3 = new Web3('https://summer-wandering-thunder.rinkeby.quiknode.pro/f95c7a8a342d3f534f714680390a91a60d1084c9/');
    let contract = new web3.eth.Contract(abi, contractAddress);
    contract.methods.get().call().then(function (info) {
        console.log("info: ", info);
        document.getElementById('lastInfo').innerHTML = info;
    });
}
//});


//console.log(window.web3.currentProvider)

// contractAddress and abi are setted after contract deploy
//var contractAddress = '0x8540EDCAa8FB540fcC61A02e130A6fA1998C5730';
//var abi = JSON.parse('[{"constant": false,"inputs": [{"name": "_string","type": "string"}],"name": "set","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [{"name": "_initstring","type": "string"}],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"constant": true,"inputs": [],"name": "get","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"}]');

//contract instance
//contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
//var account;

/*web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
        alert("Error retrieving accounts.");
        return;
    }
    if (accounts.length == 0) {
        alert("No account found! Make sure the Ethereum client is configured properly.");
        return;
    }
    account = accounts[0];
    console.log('Account: ' + account);
    web3.eth.defaultAccount = account;
});*/

