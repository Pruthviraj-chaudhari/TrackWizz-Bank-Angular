import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

export interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @Input() items: SidebarItem[] = [];

  user$ = this.authService.user$;

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout().subscribe(); 
  }  
  
  ngOnInit(): void {
  }

}
