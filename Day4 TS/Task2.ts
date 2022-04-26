class Product{
    private productId:number;
    private productName:string;
    private unitPrice:number;
    private qty:number;

    constructor(productId:number){
        this.productId = productId;
    }

    public get getName():string{
        return this.productName;
    }
    public set setName(value:string){
        this.productName=value;
    }

    public get getId():number{
        return this.productId;
    }
    public get getUnitPrice():number{
        return this.unitPrice;
    }
    public set setUnitPrice(value:number){
        this.unitPrice=value;
    }

    public get getQuantity():number{
        return this.qty;
    }
    public set setQuantity(value:number){
        this.qty=value;
    }
}

let obj4:Product = new Product(101);
obj4.setQuantity=4;
obj4.setName="Maggi";
console.log(`ProductId: ${obj4.getId} ProductName: ${obj4.getName} ProductQuantity: ${obj4.getQuantity}`);