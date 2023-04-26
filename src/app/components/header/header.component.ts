import { DataStorageService } from './../../services/data-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageService) {}

  saveData() {
    this.dataStorage.storeRecipes();
  }

  fetchData() {
    this.dataStorage.fetchRecipes();
  }
}
