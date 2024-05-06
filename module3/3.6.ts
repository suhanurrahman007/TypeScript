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

    set addDeposit(amount: number){
        this._balance = this._balance + amount
    }

    get getBalance(){
        return this._balance;
    }


}

const goRibMaNashAccount = new BankAccount (222, "Mr. GoRib", 5000);
goRibMaNashAccount.addDeposit = 500

const myBalance = goRibMaNashAccount.getBalance

console.log(myBalance);


}