import { DataStorageService } from './../../services/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  saveData() {
    this.dataStorage.storeRecipes();
  }

  fetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
