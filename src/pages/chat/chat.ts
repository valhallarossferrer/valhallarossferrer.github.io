import { Component, ViewChild, ElementRef, asNativeElements, QueryList, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  //@ViewChild('chatContainer') chatContainer: ElementRef;
  @ViewChildren('chatContainer') chatContainer:QueryList<any>;


  chatWindows = []
  chatMessages = []
  inputText = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  addChatWindow() {
    console.log("here")
    this.chatWindows.push(
      {
        title: 'Chat ' + (this.chatWindows.length + 1),
        chats: []
      }
    )
  }

  sendMesasge(title) {
    this.chatMessages.push(
      {
        from: title,
        message: this.inputText[title]
      }
    )

    this.inputText[title] = '';

    this.scrollToBottom();
  }

  private scrollToBottom() {
    console.log(this.chatContainer)
    setTimeout(() => {
      this.chatContainer.forEach(element => {
        element.nativeElement.scrollTop = element.nativeElement.scrollHeight;

      });
    }, 500);
  }

}
