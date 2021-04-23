import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  size = 8;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.size+'&nat=gb')
      .map(response => response['results'])
      .map(users => {
        return users.map(u => {
          return {
            name: u.name.first + ' ' + u.name.last,
            image: u.picture.large,
            geo: u.location.city + ' '+ u.location.state
          }
        })
      })
  }

  setSize(size) {
    this.size = size;
  }

  users = [
    { name: 'name1' },
    { name: 'name2' },
    { name: 'name3' },
    { name: 'name4' },
    { name: 'name5' },
  ]
}
