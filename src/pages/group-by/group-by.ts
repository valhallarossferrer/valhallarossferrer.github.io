import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GroupByPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-by',
  templateUrl: 'group-by.html',
})
export class GroupByPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  inventories = [
    {item_id:1, warehouse_id:1, stock:10},
    {item_id:1, warehouse_id:2, stock:3},
    {item_id:1, warehouse_id:3, stock:5},
    {item_id:2, warehouse_id:3, stock:10},
    {item_id:2, warehouse_id:2, stock:4},
    {item_id:3, warehouse_id:1, stock:10},
    {item_id:4, warehouse_id:2, stock:10},
    {item_id:4, warehouse_id:3, stock:5}  
  ]

  inventory = []
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupByPage');
  }

  groupBy(){
    const groupedCollection = this.inventories.reduce((previous, current) => {
      if (!previous[current.item_id]) {
        previous[current.item_id] = [current];
      } else {
        previous[current.item_id].push(current);
      }
      return previous;
    }, {});

    this.inventory = Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }

}
