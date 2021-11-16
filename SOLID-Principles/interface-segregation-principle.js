/* https://en.wikipedia.org/wiki/Interface_segregation_principle

No client should be forced to depend on methods it does not use -> If we had a printer class that inherits functionality from a MultiFunction class that has fax methods for example, the printer that doesn't have Fax would have unimplemented methods

How to identify ISP violations: 
- Fat Interfaces( lot of methods)
- Interfaces with low cohesion
- Empty Method Implementations

Example of bad implementation:
*/

class IMultiFunction {
  print() {}

  getPrintSpoolDetails() {}

  scan() {}

  scanPhoto() {}

  fax() {}

  internetFax() {}
}

class XeroxWorkCentre extends IMultiFunction {
  //Override all methods
  print() {}

  getPrintSpoolDetails() {}

  scan() {}

  scanPhoto() {}

  fax() {}

  internetFax() {}
}

class CanonPrinter extends IMultiFunction {
  //Override all methods, but printer doesn't have fax so they remain unused/blank.
  print() {}

  getPrintSpoolDetails() {}

  scan() {}

  scanPhoto() {}

  fax() {}

  internetFax() {}
}

// Example of good implementation:

class IPrint {
  print() {}

  getPrintSpoolDetails() {}
}

class IScan {
  scan() {}

  scanPhoto() {}
}

class IFax {
  fax() {}

  internetFax() {}
}

/* In Javascript you can't extend multiple classes(without doing a workaroung), with Typescript you could implement different interfaces. 

https://stackoverflow.com/questions/34513594/multiple-class-inheritance-in-typescript

*/
class XeroxWorkCentre extends IPrint, IScan, IFax {
  //Override all methods
  print() {}

  getPrintSpoolDetails() {}

  scan() {}

  scanPhoto() {}

  fax() {}

  internetFax() {}
}

class CanonPrinter extends IPrint, IScan {
  print() {}

  getPrintSpoolDetails() {}

  scan() {}

  scanPhoto() {}

}
