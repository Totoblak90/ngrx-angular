import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  private base_url = 'https://reqres.in/api';

  getUserList() {
    return this.http.get(`${this.base_url}/users?per_page=6`)
                .pipe( map( (resp: any) => resp.data ) )
  }

  getUser( id: number ) {
    return this.http.get(`${this.base_url}/users/${id}`)
              .pipe( map( (resp: any) => resp.data ) );
  }

}
