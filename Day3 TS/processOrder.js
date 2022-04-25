function totalPrice(productName, unitPrice, quantity, discountType, dMode) {
    var offer;
    var discountRepo;
    (function (discountRepo) {
        discountRepo[discountRepo["NEW15"] = 15] = "NEW15";
        discountRepo[discountRepo["WEEKENDS25"] = 25] = "WEEKENDS25";
    })(discountRepo || (discountRepo = {}));
    ;
    var deliverMode;
    (function (deliverMode) {
        deliverMode[deliverMode["StorePickup"] = 0] = "StorePickup";
        deliverMode[deliverMode["DeliveryToHome"] = 30] = "DeliveryToHome";
    })(deliverMode || (deliverMode = {}));
    if (typeof discountType == typeof "") {
        offer = parseInt(discountRepo[discountType]);
    }
    else if (typeof discountType == typeof 1) {
        offer = discountType;
    }
    return unitPrice * quantity + parseInt(deliverMode[dMode]) - ((offer / 100) * unitPrice * quantity);
}
console.log(totalPrice("Alpha", 10, 5, 10, "StorePickup"));
