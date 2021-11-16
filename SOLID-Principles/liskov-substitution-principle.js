/* https://en.wikipedia.org/wiki/Liskov_substitution_principle

Objects should be replaceable with their subtypes without affecting the correctness of the program.

Inheritance 'Is-A', for example, RacingCar is a type of Car.

Break the hierarchy if it fails the substitution test, for example, we created the Vehicle class so both Car and Racing Car are both vehicles.

Tell, don't ask.

Example:
*/

class Vehicle {
  getInteriorWidth() {
    // Calculates and returns interior width
  }
}

class Car extends Vehicle {
  getInteriorWidth() {
    return this.getCabinWidth()
  }
  getCabinWidth() {
    // Calculates and returns cabin width
  }
}

class RacingCar extends Vehicle {
  getInteriorWidth() {
    return this.getCockpitWidth()
  }

  getCockpitWidth() {
    // Calculates and returns cockpit width
  }
}

// Another Example:

class Product {
  constructor(discount) {
    this.discount = discount
  }

  getDiscount() {
    console.log('Product')
    return this.discount
  }
}

class InHouseProduct extends Product {
  constructor(discount) {
    super(discount)
  }

  getDiscount() {
    this.applyExtraDiscount()
    console.log('In House Product')
    return this.discount
  }
  applyExtraDiscount() {
    this.discount = this.discount * 1.5
  }
}

class PricingUtils {
  constructor() {
    this.productList = []
  }

  addToProductList(product) {
    this.productList.push(product)
  }

  checkDiscount() {
    for (let i = 0; i < this.productList.length; i++) {
      this.productList[i].getDiscount()
    }
  }
}

let pricingUtils = new PricingUtils()
pricingUtils.addToProductList(new Product())
pricingUtils.addToProductList(new Product())
pricingUtils.addToProductList(new InHouseProduct())
pricingUtils.checkDiscount()
