import { E6 } from './../models/E6';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class E6Service {

    constructor(private http: HttpClient) {}
      getE6s() {
        return this.http.get<E6[]>('http://localhost:5000/api/e6s');
      }
      getE6ById(id: number) {
        return this.http.get<E6>('http://localhost:5000/api/e6s/' + id);
      }
      putE6(id: number, e6: any) {
        return this.http.put<E6>('http://localhost:5000/api/e6s/' + id, e6);
      }
      postE6(e6: E6) {
        return this.http.post<E6>('https://localhost:5001/api/e6s/', e6);
      }
      deleteE6ById(id: number) {
        return this.http.delete<E6>('http://localhost:5000/api/e6s/' + id);
      }

}
