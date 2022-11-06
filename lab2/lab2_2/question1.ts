interface bankAccount {
  money: number;
  deposit(value: number): void;
}
interface myself {
  name: string;
  bankAccount: any;
  hobbies: [string, string];
}

var bankAccount: bankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
};

var myself: myself = {
  name: "John",
  bankAccount: bankAccount,
  hobbies: ["Violin", "Cooking"],
};

myself.bankAccount.deposit(3000);
console.log(JSON.stringify(myself));
