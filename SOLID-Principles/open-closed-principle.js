/* https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle

Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

Closed for Modification: 
New features getting added to the software component should not have to modify existing code.

Open for Extension:
A software component should be extendable to add a new feature or to add a new behavior to do it.

- Ease of adding new features
- Easier testing, as we don't need to change existing tests.
- Often requires decoupling, which helps following Single Responsibility Principle.

- SOLID Principles are intertwined and interdependent, are most effective when combined together.

- Be careful when applying the Open Closed Principle, you could end up with many classes that can complicate your design.

Example:
*/

class CustomerProfile {
  constructor(isLoyalCustomer) {
    this.isLoyalCustomer = isLoyalCustomer
  }
}

class HealthInsuranceCustomerProfile extends CustomerProfile {
  constructor(isLoyalCustomer) {
    super(isLoyalCustomer)
  }
}

class HomeInsuranceCustomerProfile extends CustomerProfile {
  constructor(isLoyalCustomer) {
    super(isLoyalCustomer)
  }
}

// Imagine in a future we want to add Vehicle insurance too, We would just need to extend the CustomerProfile class and we wouldn't need to touch the InsurancePremiumDiscountCalculator

class VehicleInsuranceCustomerProfile extends CustomerProfile {
  constructor(isLoyalCustomer) {
    super(isLoyalCustomer)
  }
}

class InsurancePremiumDiscountCalculator {
  calculatePremiumDiscountPercent(customerProfile) {
    // Do something
  }
}
