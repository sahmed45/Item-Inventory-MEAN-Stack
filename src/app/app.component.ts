import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'IT6203';
  // formName = 'Add New Product';
  hrefVal = 'http://localhost:4200';
  updatedLink = 'http://localhost:4200';

  //declare variable to hold response and make it public to be accessible from components.html
  public inventory;
  //initialize the call using InventoryService
  constructor(private _myService: InventoryService) {}
  ngOnInit() {
    this.getInventory();
  }
  onDelete(itemId: string) {
    this._myService.deleteItem(itemId);
  }

  //method called OnInit
  getInventory() {
    this._myService.getInventory().subscribe(
      //read data and assign to public variable inventory
      (data) => {
        this.inventory = data;
      },
      (err) => console.error(err),
      () => console.log('finished loading')
    );
  }
}
