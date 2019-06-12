import { Evaluation } from './../models/evalutation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phase } from '../models/Phase';
import { Note } from '../models/Note';
import { Critere } from '../models/Critere';

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


  getPhase() {
    return this.http.get<Phase[]>('http://localhost:5000/api/phases');
  }
  getPhaseById(id: number) {
    return this.http.get<Phase>('http://localhost:5000/api/phases/' + id);
  }
  putPhase(id: number, phase: any) {
    return this.http.put<Phase>('http://localhost:5000/api/phases/' + id, phase);
  }
  postPhase(phase: Phase) {
    return this.http.post<Phase>('http://localhost:5000/api/phases/', phase);
  }
  deletePhaseById(id: number) {
    return this.http.delete<Phase>('http://localhost:5000/api/phases/' + id);
  }


  getNote() {
    return this.http.get<Note[]>('http://localhost:5000/api/notes');
  }
  getNoteById(id: number) {
    return this.http.get<Note>('http://localhost:5000/api/notes/' + id);
  }
  putNote(id: number, note: any) {
    return this.http.put<Note>('http://localhost:5000/api/notes/' + id, note);
  }
  postNote(note: Note) {
    return this.http.post<Note>('http://localhost:5000/api/notes/', note);
  }
  deleteNoteById(id: number) {
    return this.http.delete<Note>('http://localhost:5000/api/notes/' + id);
  }


  getCritere() {
    return this.http.get<Critere[]>('http://localhost:5000/api/criteres');
  }
  getCritereById(id: number) {
    return this.http.get<Critere>('http://localhost:5000/api/criteres/' + id);
  }
  putCritere(id: number, critere: any) {
    return this.http.put<Critere>('http://localhost:5000/api/criteres/' + id, critere);
  }
  postCritere(critere: Critere) {
    return this.http.post<Critere>('http://localhost:5000/api/criteres/', critere);
  }
  deleteCritereById(id: number) {
    return this.http.delete<Critere>('http://localhost:5000/api/criteres/' + id);
  }
}
