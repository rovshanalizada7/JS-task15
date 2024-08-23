class Customer extends Market {
    constructor(name,surname,card,product) {
      super(name,surname,card,product)
    }
    calculateDiscount(){
        return super.calculateDiscount()
    }
}