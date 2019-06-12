export class Critere {
  id: number;
  typeName: string;
  phaseName: string;

  constructor(
    public Label: string,
    public PhaseId: number,
    public Type: number,
  ) {
    this.id = 0;
  }

}
