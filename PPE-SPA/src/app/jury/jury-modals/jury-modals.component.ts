import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
export interface JuryModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-jury-modals',
  template:
  `
  <div class="modal-content">
    <div class="modal-header">
      <h4><i class="icon-globe"></i>&nbsp;{{ title || "Confirmation" }}</h4>
    </div>
    <div class="modal-body">
      {{message}}
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary btn-sm" (click)="confirm()">
        Confirmer
      </button>
      <button type="button" class="btn btn-outline-primary btn-sm" (click)="close()">
        Annuler
      </button>
    </div>
  </div>
`
})
export class JuryModalsComponent extends SimpleModalComponent<JuryModel, boolean> implements JuryModel {
  title: string;
  message: string;
  constructor() {
    super();
   }

   confirm() {
    this.result = true;
    this.close();
  }

}
