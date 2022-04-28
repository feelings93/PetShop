
export class ItemCart
{
    public id :number ;
    public petId: number;
    public cartId:number;
    public name:string ="name";
    public price:number=0;
    public quantity:number =0;
    constructor (petId,carId,name="name",price=0,quantity=1)
    {
        this.petId=petId;
        this.cartId=carId;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
 
}