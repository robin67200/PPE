import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jury } from '../models/jury';

@Injectable()
export class JuryService {

  constructor(private http: HttpClient) {}
  getJury() {
    return this.http.get<Jury[]>('http://localhost:5000/api/jurys');
  }
  getJuryById(id: number) {
    return this.http.get<Jury>('http://localhost:5000/api/jurys/' + id);
  }
  putJury(id: number, jury: any) {
    return this.http.put<Jury>('http://localhost:5000/api/jurys/' + id, jury);
  }
  postJury(jury: Jury) {
    return this.http.post<Jury>('http://localhost:5000/api/jurys/', jury);
  }
  deleteJuryById(id: number) {
    return this.http.delete<Jury>('http://localhost:5000/api/jurys/' + id);
  }
}
