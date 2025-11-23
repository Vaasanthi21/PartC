function createWallet() {
  let balance=0;
  return{
    addMoney: function(amount) {
      if(amount>0) {
        balance +=amount;
        console.log('Added ${amount}. New Balance: ${balance}');
      }
    },
    checkBalance: function() {
      console.log('Current Balance: ${balance}');
      return balance;
    }
  };
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance(); 
