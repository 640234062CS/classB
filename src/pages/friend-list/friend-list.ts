import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../modals/classmodals';
import { FriendRestProvider } from '../../providers/friend-rest/friend-rest';
import { FrienddetailPage } from '../frienddetail/frienddetail';



@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  friends:Friend;

  category:string;

  constructor(private friendrest:FriendRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category")
    this.friendrest.getFriendList().subscribe(data=>{
      this.friends=data.filter(friend => friend.category === this.category)
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }

  goBack(){
    this.navCtrl.pop();

  }
  showDetail(studentid:number){
    this.navCtrl.push(FrienddetailPage,
      {studentid:studentid}
      );
  }

  



}
