
class UserName {
  private readonly value: string;

  constructor(value: string) {
    if (value.length < 3) throw new Exception();

    this.value = value;
  }
}

  isEqual(compareName: UserName) {
    return this.value === compareName.value;
  }
}

class SerialCode {
  private readonly productCode: string;
  private readonly lotCode: string;
  private readonly branchCode: string;
}


  
  constructor(productCode: string, lotCode: string, branchCode: string) {
    this.productCode = productCode;
    this.lotCode = lotCode;
    this.branchCode = branchCode;
  }
}

const code: SerialCode = 'PD01-L01-B01';



let userName = new UserName("test");
userName = new UserName("Hello");

