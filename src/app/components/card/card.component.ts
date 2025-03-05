import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() title?: string;
  @Input() padding: boolean = true;
  @Input() footer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
