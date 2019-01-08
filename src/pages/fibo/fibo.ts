import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FiboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fibo',
  templateUrl: 'fibo.html',
})
export class FiboPage {
  fiboNumbers = []

  min = 0;
  max = 0;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiboPage');
  }

  fiboLoop(min, max) {
    let numbers = [0, 1]
    var a = 0, b = 1

    while (max > a + b) {
      numbers.push(a + b)
      a = b;
      b = numbers[numbers.length - 1]
    }

    return numbers.filter(number => number >= min);
  }

  fiboRec(num) {
    if (num <= 1) return 1;

    return this.fiboRec(num - 1) + this.fiboRec(num - 2);
  }

  fiboMemo(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = this.fiboMemo(num - 1, memo) + this.fiboMemo(num - 2, memo);
  }

  generate(){
    console.log("generate", this.fiboLoop(this.min, this.max));    
    this.fiboNumbers = this.fiboLoop(this.min, this.max)
  }

}
