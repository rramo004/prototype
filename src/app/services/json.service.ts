import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Promise<any> {
    return this.http.get('http://localhost:4200/assets/tvsm.json').toPromise();
  }
}
