export class Note {
  id: number;
  etudiantName: string;

  constructor(
    public CritereId: number,
    public EvaluationId: number,
    public notation: number
  ) {
    this.id = 0;
  }

}
