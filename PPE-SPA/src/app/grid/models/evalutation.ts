export class Evaluation {
    id: number;
    etudiantName: string;

    constructor(
      public date: Date,
      public etudiantId: number,
      public juryId: number,
      public notePhase1: string,
      public notePhase2: string,
      public resultat: string
    ) {
      this.id = 0;
    }

  }
