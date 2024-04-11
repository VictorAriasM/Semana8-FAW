import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogClose,
  MatDialogActions,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogClose, MatDialogActions, MatDialogContent, MatButton],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
