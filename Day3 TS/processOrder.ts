function totalPrice(productName:string,unitPrice:number,quantity:number,discountType:any, dMode: string):any
{
    let offer:number;
    enum discountRepo{NEW15=15,WEEKENDS25=25};
    enum deliverMode{StorePickup=0,DeliveryToHome=30}

    if(typeof discountType == typeof"")
    {
        offer = parseInt(discountRepo[discountType]);
    }
    else if(typeof discountType == typeof 1)
    {
        offer = discountType;
    }
    return    unitPrice*quantity+parseInt(deliverMode[dMode])-((offer/100)*unitPrice*quantity);

}
console.log(totalPrice("Alpha",10,5,10,"StorePickup"));
