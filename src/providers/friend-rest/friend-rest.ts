import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friend } from '../../modals/classmodals';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FriendRestProvider {

  private url:string="https://raw.githubusercontent.com/640234062CS/myFriend/master/student.json";

  constructor(public http: HttpClient) {
    console.log('Hello FriendRestProvider Provider');
  }

  getFriendList():Observable<any>
  {
    return this.http.get<Friend>(this.url)
  }

}
