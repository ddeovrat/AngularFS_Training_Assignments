var Customer = /** @class */ (function () {
    function Customer(id, name, location) {
        if (name === void 0) { name = ""; }
        if (location === void 0) { location = ""; }
        this.cid = id;
        this.cname = name;
        this.address = location;
    }
    Customer.prototype.showDetails = function () {
        console.log("Customer Details:: Id: ".concat(this.cid, " Name: ").concat(this.cname, " City: ").concat(this.address));
    };
    return Customer;
}());
var obj1 = new Customer(101);
obj1.showDetails();
console.log("------------------------------------");
var obj2 = new Customer(101, "Scott");
obj1.showDetails();
console.log("------------------------------------");
var obj3 = new Customer(101, "Scott", "Hyderabad");
obj1.showDetails();
console.log("------------------------------------");
