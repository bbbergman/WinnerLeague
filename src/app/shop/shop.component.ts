import { Component, OnInit } from '@angular/core';
import {ShoppingItemService} from "../shoppingItemService.service";
import {ShoppingItem} from "../shoppingItem.model";
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public shoppingItemsArray: ShoppingItem[];
  constructor(private shoppingItemService: ShoppingItemService, public modal: Modal) { }

  ngOnInit() {
    // this.shoppingItemService.getShoppingItems().then((data) => {
    //   this.shoppingItemsArray = data;
    // });
    this.shoppingItemsArray = this.shoppingItemService.getShoppingItemsAfterLoading();
  }

  addToCart(id: number) {
   this.shoppingItemService.getItemsBoughtArray().push(this.shoppingItemService.getShoppingItem(id));
    const dialogRef = this.modal.alert()
      .size('sm')
      .showClose(true)
      .title('Item successfully added to shopping cart!')
      .body('')
      .open();
  }

}
