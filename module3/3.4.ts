{
    class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    addDeposit(amount: number){
        this._balance = this._balance + amount
    }

    getBalance(){
        return this._balance;
    }


}

// class StudentAccount extends BankAccount {
//     test(){
//         this._balance = 33; 
//     }
// }

const goRibMaNashAccount = new BankAccount (222, "Mr. GoRib", 56754);
goRibMaNashAccount.addDeposit(400)

const myBalance = goRibMaNashAccount.getBalance()

console.log(myBalance);


}