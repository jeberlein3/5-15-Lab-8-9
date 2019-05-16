import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL = '';

  constructor(
// tslint:disable-next-line: deprecation
    private http: Http

  ) {
    this.apiURL = environment.apiURL;
  }
  test() {
    console.log('from http service testing...');

  }


  // get('car')
  async get(path: string) {
    const resp = await this.http.get(this.apiURL + path, this.headers).toPromise();
    console.log('resp from http service get() resp:', resp.json());
    return resp.json();


  } // post ('car', {make: Chevy, model:Colorado});
  async post(path: string, payload: any) {
    const resp = await this.http.post(this.apiURL + path, payload, this.headers).toPromise();
    console.log('from http service post() resp:', resp.json());
  }
  // put ('car/id/1,{make: 'toyota', model: 'celica'});
  async put(path: string, payload: any) {
    const resp = await this.http.put(this.apiURL + path, payload, this.headers).toPromise();
    console.log('from http service put()', resp.json());
    return resp.json();



  }
  async delete(path: string) {
    const resp = await this.http.delete(this.apiURL + path, this.headers).toPromise();
    console.log('from http service delete()', resp.json();
    return resp.json();

  }

  get headers() {
    const token = localStorage.getItem('id_token') || null;
// tslint:disable-next-line: deprecation
    const headers = new Headers({ 'Content-Type': 'application/json' });
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return {
      headers,
      withCredentials: true
    };
  }
}
