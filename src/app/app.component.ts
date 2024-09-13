import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileFormComponent } from './components/file-form/file-form.component'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FileListComponent, FileFormComponent, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'file-management';
  showForm = false;  

  toggleFormVisibility() {
    this.showForm = !this.showForm;
  }
}
