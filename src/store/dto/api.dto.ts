
export class ItemPetCart
{
    public id :number ;
    public name:string ="name";
    public price:number=0;
    public petId: number;
    public cartId:number;
    public url :string;
    public type:string="pet";
    constructor (name,price=0,petId,cartId,url)
    {
        this.name=name;
        this.price=price;
        this.petId=petId;
        this.cartId=cartId;
        this.url=url;
    }
 
}
export class ItemProductCart
{
    public id :number ;
    public name:string ="name";
    public quantity:number ;
    public price:number;
    public cartId:number;
    public productId:number;
    public url :string;
    public type:string="product";
    constructor (name,quantity=1,price=0,cartId,productId,url)
    {
        this.name=name;
        this.quantity= quantity;
        this.price=price;
        this.cartId=cartId;
        this.productId=productId;
        this.url=url;
    }
 
}

export class ItemServiceOrder
{
    public id :number ;
    public name:string ="name";
    public serviceId:number;
    public orderId:number;
    public doneById:number;
    public url :string;
    public type:string="pet";

    constructor (name,serviceId,orderId,doneById,url)
    {
        this.name=name;
        this.serviceId= serviceId;
        this.orderId=orderId;
        this.doneById= doneById;
        this.url=url;
    }
 
}