import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css',
})
export class CardPricingComponent implements OnInit {
  @Input()
	gameType:string ="Digital PS4"
	@Input()
	gamePrice:string = "R$ 399,90"
  constructor() { }

  ngOnInit(): void {
  }
}
