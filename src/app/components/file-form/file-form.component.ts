import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileService } from '../../services/file.service';
import { FileItem, FileOwner, FileType } from '../../../models/file.item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent {
  fileForm: FormGroup;
  owners: FileOwner[] = [];
  fileTypes = FileType;

  constructor(private fb: FormBuilder, private fileService: FileService) {
    this.fileForm = this.fb.group({
      name: ['', Validators.required],
      creation: ['', Validators.required],
      type: [FileType.FILE, Validators.required],
      folder: [''],
      owners: [[]]
    });

    this.owners = this.fileService.getOwners();
  }

  onSubmit() {
    if (this.fileForm.valid) {
      const newFile: FileItem = this.fileForm.value;
      newFile.id = Math.random().toString(36).substring(2, 9); 
      this.fileService.addFile(newFile);
      alert('Archivo agregado con éxito');
    }
  }
}
