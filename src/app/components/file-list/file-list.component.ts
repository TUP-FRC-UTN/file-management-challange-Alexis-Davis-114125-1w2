import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { FileItem } from '../../../models/file.item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  files: FileItem[] = [];
  selectedFiles: Set<string> = new Set();

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.loadFiles();
  }

  loadFiles() {
    this.files = this.fileService.getFiles();
  }

  toggleSelection(fileId: string) {
    if (this.selectedFiles.has(fileId)) {
      this.selectedFiles.delete(fileId);
    } else {
      this.selectedFiles.add(fileId);
    }
  }

  deleteSelectedFiles() {
    if (this.selectedFiles.size > 0) {
      if (confirm('¿Está seguro de que desea eliminar los elementos seleccionados?')) {
        this.fileService.deleteFiles(Array.from(this.selectedFiles));
        this.selectedFiles.clear();
        this.loadFiles();
      }
    }
  }
}
