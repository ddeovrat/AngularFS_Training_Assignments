var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = productId;
    }
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.productName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setName", {
        set: function (value) {
            this.productName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getId", {
        get: function () {
            return this.productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getUnitPrice", {
        get: function () {
            return this.unitPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setUnitPrice", {
        set: function (value) {
            this.unitPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getQuantity", {
        get: function () {
            return this.qty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setQuantity", {
        set: function (value) {
            this.qty = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var obj4 = new Product(101);
obj4.setQuantity = 4;
obj4.setName = "Maggi";
console.log("ProductId: ".concat(obj4.getId, " ProductName: ").concat(obj4.getName, " ProductQuantity: ").concat(obj4.getQuantity));
