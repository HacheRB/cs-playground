/* https://en.wikipedia.org/wiki/Dependency_inversion_principle

- High-level modules should not import anything from low-level modules. Both should depend on abstractions (e.g., interfaces).

- Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

Example: 

Use it as reference
*/

class ProductCatalog {
  constructor() {
    this.list = []
  }
  listAllProducts() {
    let sqlProductRepository = new SQLProductRepository()
    this.list = sqlProductRepository.getAllProductNames()
    console.log(this.list)
  }
}

// This won't work in JS but use it as reference and check about DI in high-order functions or classes in JS.
class ProductFactory {
  public static ProductRepository create () {
    return new SQLProductRepository
  }
}

class ProductRepository {
  getAllProductNames() {}
}

class SQLProductRepository {
  getAllProductNames() {
    // this method connects to DB and returns a list of products.
    return ['test', 'test2']
  }
}

let testing = new ProductCatalog()

testing.listAllProducts()
