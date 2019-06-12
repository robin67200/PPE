export class Note {
  id: number;
  etudiantName: string;

  constructor(
    public CritereId: number,
    public EvaluationId: number,
    public Notation: number
  ) {
    this.id = 0;
  }

}
