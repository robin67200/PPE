export class Evaluation {
    id: number;
    etudiantName: string;

    constructor(
      public date: Date,
      public etudiantId: number,
      public juryId: number,
      public notePhase1: number,
      public notePhase2: number,
      public resultat: number
    ) {
      this.id = 0;
    }

  }
