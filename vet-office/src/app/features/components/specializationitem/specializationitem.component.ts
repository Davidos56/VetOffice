import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specializationitem',
  imports: [],
  templateUrl: './specializationitem.component.html',
  styleUrl: './specializationitem.component.css'
})

export class SpecializationitemComponent {
@Input() Id! :string
@Input() IsOdd: boolean = false;
@Input() Title! :string
@Input() CreatedDate! : string | null;
@Input() Message! :string;
@Input() Img! :string;

constructor(){}

}
