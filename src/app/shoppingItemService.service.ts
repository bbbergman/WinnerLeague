import {ShoppingItem} from "./shoppingItem.model";

export class ShoppingItemService {
  private ItemsBoughtArray: ShoppingItem[] = [];
  private shoppingItemsArray: ShoppingItem[] = [
    {
      itemTitle: 'Maccabi Haifa shirt',
      itemDescription: 'offical shirt 2017',
      itemPrice: 50,
      itemImageUrl: 'http://shop.mhaifafc.com/pics/secondkit.png'
    },
    {
      itemTitle: 'Maccabi Tel Aviv shirt',
      itemDescription: 'offical shirt 2017',
      itemPrice: 40,
      itemImageUrl: 'http://shop.maccabi-tlv.co.il/prdPics/products/gallery_2742_prd_image_1.jpg'
    },
    {
      itemTitle: 'Hapoel Beer Sheva shirt',
      itemDescription: 'offical shirt 2017',
      itemPrice: 60,
      itemImageUrl: 'https://shop.hbsfc.co.il/application/assets/img/pictures/59a42b888b02f.jpg'
    },
    {
      itemTitle: 'Maccabi Haifa scarf',
      itemDescription: 'winter collection',
      itemPrice: 20,
      itemImageUrl: 'http://shop.mhaifafc.com/pics/pic/IMG_6853.jpg'
    },
    {
      itemTitle: 'Hapoel Beer Sheva away shirt',
      itemDescription: 'offical shirt 2017',
      itemPrice: 40,
      itemImageUrl: 'https://shop.hbsfc.co.il/application/assets/img/pictures/59a826428b8ee.jpg'
    },
    {
      itemTitle: 'Maccabi Haifa  pre-game shirt',
      itemDescription: 'offical shirt 2017',
      itemPrice: 35,
      itemImageUrl: 'http://shop.mhaifafc.com/pics/trainingkit3.png'
    },
  ];
  getItemsBoughtArray() {
    return this.ItemsBoughtArray;
  }
  getShoppingItems() {
    return this.shoppingItemsArray.slice();
  }
  getShoppingItem(id: number) {
    return this.shoppingItemsArray[id];
  }
  returnTotalPrice() {
    let sum = 0;
    for (const item of this.ItemsBoughtArray) {
      sum += item.itemPrice;
    }
      return sum;
    }
}
