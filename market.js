class Market {
 
    discount = 20

    constructor(name,surname,card,product){
        this.name = name
        this.surname = surname
        this.card = card
        this.product = product
    }

    calculateDiscount() {
        if(this.productDetail()) {
          if(this.card){
            this.result = 0;
            this.product.forEach((item) => {
                this.result += item.price * (100 - this.discount) / 100;
            })
            return this.result
          } else {
            this.result2 = 0;
            this.product.forEach((item) => {
                this.result2 += item.price
            })
            return this.result2
          }
        }else {
            return 0;
        }
    }

   
     productDetail() {
        if(this.product == null && this.product.length == 0) {
            console.log("Please select a product");
        }else {
            return true
        }
     }

}