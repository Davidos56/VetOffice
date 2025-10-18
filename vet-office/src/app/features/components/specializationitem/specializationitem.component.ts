import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-specializationitem',
  imports: [DatePipe],
  templateUrl: './specializationitem.component.html',
  styleUrl: './specializationitem.component.css'
})

export class SpecializationitemComponent {
@Input() Title! :string
@Input() CreatedDate! : Date | null;
@Input() Message! :string;
@Input() Img! :string;

constructor(private datePipe: DatePipe){}

}
