export class ItemPetCart {
  public id: number;
  public name: string = 'name';
  public price: number = 0;
  public itemId: number;
  public cartId: number;
  public url: string;
  public type: string = 'pet';
  constructor(name, price = 0, itemId, cartId, url) {
    this.name = name;
    this.price = price;
    this.itemId = itemId;
    this.cartId = cartId;
    this.url = url;
  }
}
export class ItemProductCart {
  public id: number;
  public name: string = 'name';
  public quantity: number;
  public price: number;
  public cartId: number;
  public itemId: number;
  public url: string;
  public type: string = 'product';
  constructor(name, quantity = 1, price = 0, cartId, itemId, url) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.cartId = cartId;
    this.itemId = itemId;
    this.url = url;
  }
}

export class ItemServiceOrder {
  public id: number;
  public name: string = 'name';
  public itemId: number;
  public orderId: number;
  public doneById: number;
  public url: string;
  public type: string = 'pet';

  constructor(name, itemId, orderId, doneById, url) {
    this.name = name;
    this.itemId = itemId;
    this.orderId = orderId;
    this.doneById = doneById;
    this.url = url;
  }
}
