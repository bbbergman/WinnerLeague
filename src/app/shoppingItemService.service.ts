import {ShoppingItem} from "./shoppingItem.model";
import {httpService} from "./httpService.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ShoppingItemService {
  constructor(private httpService: httpService){}

  private shoppingItemsUrl = "https://my-project-c46a9.firebaseio.com/ShoppingItems.json";
  private shoppingItemsArray: ShoppingItem[] ;
  private ItemsBoughtArray: ShoppingItem[] = [];

  getShoppingItems(): Promise<any> {
    return this.httpService.getDataFromServer(this.shoppingItemsUrl).then((data) => {
      this.shoppingItemsArray = data;
    })
      .catch(error => {
        console.log("error in get shopping items :"+error);
      });
  }

  getItemsBoughtArray() {
    return this.ItemsBoughtArray;
  }
  setItemsBoughtArray(array) {
    this.ItemsBoughtArray = array;
  }
  getShoppingItemsAfterLoading() {
    return this.shoppingItemsArray.slice();
  }
  getShoppingItem(id: number) {
    return this.shoppingItemsArray[id];
  }
    returnNumberOfItems() {
    let count = 0;
    for (const item of this.ItemsBoughtArray) {
      count++;
    }
    return count;
  }
  returnTotalPrice() {
    let sum = 0;
    for (const item of this.ItemsBoughtArray) {
      sum += item.itemPrice;
    }
      return sum;
    }
}
