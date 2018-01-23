import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from "../shoppingItem.model";
import {ShoppingItemService} from "../shoppingItemService.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public ItemsBoughtArray: ShoppingItem[];
  public sum: number;
  public numOfItems: number;
  constructor(private shoppingItemService: ShoppingItemService) { }

  ngOnInit() {
    this.ItemsBoughtArray = this.shoppingItemService.getItemsBoughtArray();
     setInterval(() => {this.sum = this.shoppingItemService.returnTotalPrice(); }, 500);
    setInterval(() => {this.numOfItems = this.shoppingItemService.returnNumberOfItems(); }, 500);
  }
  removeFromCart(id: number) {
    this.shoppingItemService.getItemsBoughtArray().splice(id, 1);
  }

}
