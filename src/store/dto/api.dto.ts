
export class ItemCart
{
    public id :number ;
    public petId: number;
    public cartId:number;
    public name:string ="name";
    public price:number=0;
    public url :string;
    public quantity:number =0;
    constructor (petId,cartId,name="name",price=0,url,quantity=1)
    {
        this.petId=petId;
        this.cartId=cartId;
        this.name=name;
        this.price=price;
        this.url=url;
        this.quantity=quantity;
    }
 
}