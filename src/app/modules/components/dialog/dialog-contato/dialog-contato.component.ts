import { Component } from '@angular/core';
import { Inject, OnInit, signal } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';




@Component({
  selector: 'app-dialog-contato',
  templateUrl: './dialog-contato.component.html',
  styleUrl: './dialog-contato.component.scss',
  standalone: true,  // Adicione esta linha
  imports: [
    // ... outras importações
    MatDialogModule,
    MatIconModule
  ],
})
export class DialogContatoComponent {

  usuarioName:string = ""

  constructor(
    // referenciando modal
    private _dialogRef: MatDialogRef<DialogContatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nome: string }
  ) {
    this.usuarioName = data.nome;
  }



  // função fechanmento modal
  public closeModal() {
    return this._dialogRef.close();
  }
}
