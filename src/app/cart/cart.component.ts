import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from "../shoppingItem.model";
import {ShoppingItemService} from "../shoppingItemService.service";
import {StorageService} from "../storageService.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public ItemsBoughtArray: ShoppingItem[];
  public sum: number;
  public numOfItems: number;
  dataFromLocalStorage;
  constructor(private shoppingItemService: ShoppingItemService, private storageService : StorageService) { }

  ngOnInit() {
      this.ItemsBoughtArray = this.shoppingItemService.getItemsBoughtArray();
     setInterval(() => {this.sum = this.shoppingItemService.returnTotalPrice(); }, 500);
    setInterval(() => {this.numOfItems = this.shoppingItemService.returnNumberOfItems(); }, 500);
  }
  removeFromCart(id: number) {
    this.ItemsBoughtArray.splice(id, 1);
  }
  // onRefresh() {
  //   const dataToLocalStorage = {'BoughtItems': this.ItemsBoughtArray};
  //   this.storageService.write('BoughtItemsData', dataToLocalStorage);
  // }
  // getDataFromLocalStorage() {
  //   this.dataFromLocalStorage = this.storageService.read('BoughtItemsData');
  //   if (this.dataFromLocalStorage !== null ) {
  //     this.ItemsBoughtArray = this.dataFromLocalStorage['BoughtItems'];
  //     this.shoppingItemService.setItemsBoughtArray(this.ItemsBoughtArray);
  //   } else {
  //     return false; }}

}
