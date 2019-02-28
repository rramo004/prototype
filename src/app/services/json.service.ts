import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) {
  }

  public getJSON(html: string): Promise<any> {
    return this.http.get(html).toPromise();
  }
}
