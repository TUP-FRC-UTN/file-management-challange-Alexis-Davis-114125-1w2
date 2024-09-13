import { Injectable } from '@angular/core';
import { FileItem, FileOwner , FileType } from '../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
@Injectable({
  providedIn: 'root'
})
export class FileService {
  private files: FileItem[] = FILE_LIST;

  constructor() { }

  getFiles(): FileItem[] {
    return this.files.sort((a, b) => {
      if (a.type === FileType.FOLDER && b.type === FileType.FILE) return -1;
      if (a.type === FileType.FILE && b.type === FileType.FOLDER) return 1;
      return a.name.localeCompare(b.name);
    });
  }

  addFile(file: FileItem) {
    this.files.push(file);
  }

  deleteFiles(ids: string[]) {
    this.files = this.files.filter(file => !ids.includes(file.id));
  }

  getOwners(): FileOwner[] {
    return OWNERS;
  }
}
