class Customer{
    public cid:number;
    public cname:string;
    public address:string;
    constructor(id:number,name:string="",location:string=""){
        this.cid=id;
        this.cname=name;
        this.address=location;
    }
    public showDetails():void{
        console.log(`Customer Details:: Id: ${this.cid} Name: ${this.cname} City: ${this.address}`);
    }
}

let obj1:Customer = new Customer(101);
obj1.showDetails();
console.log("------------------------------------")

let obj2:Customer = new Customer(101,"Scott");
obj1.showDetails();
console.log("------------------------------------")

let obj3:Customer = new Customer(101,"Scott","Hyderabad");
obj1.showDetails();
console.log("------------------------------------")