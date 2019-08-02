
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescript custom enum for search types (optional)
export enum SearchType {
  bangalore = 'BANGALORE',
  mumbai = 'MUMBAI',
  chennai = 'CHENNAI'
}

@Injectable({
  providedIn: 'root'
})
export class BankService {

  url = 'https://vast-shore-74260.herokuapp.com/banks';

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?city=${type}`).pipe(
      map(results => results['Search'])
    );
  }
}
