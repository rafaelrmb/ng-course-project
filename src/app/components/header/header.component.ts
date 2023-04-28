import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from './../../services/data-storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  isLoggedIn = false;

  constructor(
    private dataStorage: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.userSub = this.authService.user.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

  saveData() {
    this.dataStorage.storeRecipes();
  }

  fetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
