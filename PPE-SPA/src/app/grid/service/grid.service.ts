import { Evaluation } from './../models/evalutation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GridService {

  constructor(private http: HttpClient) {}
  getEvaluation() {
    return this.http.get<Evaluation[]>('http://localhost:5000/api/evaluations');
  }
  getEvaluationById(id: number) {
    return this.http.get<Evaluation>('http://localhost:5000/api/evaluations/' + id);
  }
  putEvaluation(id: number, evaluation: any) {
    return this.http.put<Evaluation>('http://localhost:5000/api/evaluations/' + id, evaluation);
  }
  postEvaluation(evaluation: Evaluation) {
    return this.http.post<Evaluation>('http://localhost:5000/api/evaluations/', evaluation);
  }
  deleteEvaluationById(id: number) {
    return this.http.delete<Evaluation>('http://localhost:5000/api/evaluations/' + id);
  }
}
