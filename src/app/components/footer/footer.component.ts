import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
