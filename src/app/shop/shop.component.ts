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
    this.shoppingItemsArray = this.shoppingItemService.getShoppingItems();
  }

  addToCart(id: number) {
   this.shoppingItemService.getItemsBoughtArray().push(this.shoppingItemService.getShoppingItem(id));
    const dialogRef = this.modal.alert()
      .size('sm')
      .showClose(true)
      .title('item successfully added to shopping cart!')
      .body('')
      .open();
  }

}
