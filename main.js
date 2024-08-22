// isdifadeciden endirim karti olub olmadigini yoxluyan bir 
// prompt qurun 
// isdifadeciden ad soyad alin
// eger endirim karti varsa endirim edin yoxdursa endirimsiz mehsulun
// neticesini verin

// MarketBase,Musteri classlari yaradin
// Musteri classi MarketBase ni extend alacaq
// Musteri ve MarketBase classi ad,soyad,endirimKarti,mehsullar
// olan constructor yaradin

// hesabla metodu olacaq MarketBase,Musteri classlarinda
// hesabla metodu musterinin aldigi mehsullari faizle endirim 
// edilmis qiymetini vermelidi 
// hemcinin endirim olunan faiz derecesinide MarketBase icinde yazilacaq

// MarketBasee clasinda mehsullari yoxluyan function yazin



class MarketBase {
    constructor(name, surname, discountCard, products) {
        this.name = name;
        this.surname = surname;
        this.discountCard = discountCard;
        this.products = products;
    }

    calculateDiscount(discount) {
        if (this.discountCard == true) {
            let totalPrice = 0;
            this.products.forEach(product => totalPrice += product.price);
            const discountedPrice = totalPrice - (totalPrice * discount / 100);
            return `Total amount with discount :${discountedPrice}`;
        }else {
            console.log("No discount card");
        }
    }

    displayCustomerInfo() {
        console.log(`Name: ${this.name} Surname:${this.surname}`);
        console.log(`Discount Card: ${this.discountCard ? 'Yes' : 'No'}`);
    }

    displayProducts() {
        console.log("Products:");
        this.products.forEach(product => console.log(`Product name:${product.name} Product price: $${product.price}`));
    }
}


class Customer extends MarketBase {
    constructor(name, surname, discountCard, products) {
        super(name, surname, discountCard, products);
    }

    displayTotalWithDiscount(discount) {
        this.calculateDiscount(discount)
    }
}


const customer = new Customer("Rovshan", "Alizada", true, [
    { name: "Milk", price: 5 },
    { name: "Bread", price: 3 },
    { name: "Eggs", price: 6 }
]);
const customer2 = new Customer("Mehman", "Shamilov", false, [
    { name: "Milk", price: 5 },
    { name: "Bread", price: 3 },
    { name: "Potato", price: 9 }
]);


customer.displayCustomerInfo();  
customer.displayProducts();      
console.log(customer.calculateDiscount(10));

customer2.displayCustomerInfo()
customer2.displayProducts(); 
customer2.calculateDiscount(10);






