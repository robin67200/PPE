export class Evaluation {
    id: number;
    etudiantName: string;

    constructor(
      public date: Date,
      public EtudiantId: number,
      public JuryId: number,
    ) {
      this.id = 0;
    }

  }
