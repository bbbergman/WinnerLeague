export class ShoppingItem {
  public itemTitle: string;
  public itemDescription: string;
  public itemPrice: number;
  public itemImageUrl: string;

  constructor(itemTitle: string, itemDescription: string, itemPrice: number, itemImageUrl: string) {
    this.itemTitle = itemTitle;
    this.itemDescription = itemDescription;
    itemPrice = itemPrice;
    this.itemImageUrl = itemImageUrl;
  }
}
