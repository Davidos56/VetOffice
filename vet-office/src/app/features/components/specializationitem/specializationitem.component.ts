import { Component, Input, input, signal, OnChanges, SimpleChanges, WritableSignal, OnInit } from '@angular/core';
import { FacebookService } from '../../../services/facebook.service';
import { FacebookPost } from '../../../core/facebookpost.model';

@Component({
  selector: 'app-specializationitem',
  imports: [],
  templateUrl: './specializationitem.component.html',
  styleUrl: './specializationitem.component.css'
})
export class SpecializationitemComponent implements OnChanges, OnInit {

constructor(private fbService: FacebookService,){}

  posts: FacebookPost[] = [];
  ngOnInit(): void {
    this.fbService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  @Input() value! :number
  featuretteText!: WritableSignal<string> 
  featuretteImage!: WritableSignal<string>; 

  ngOnChanges(changes: SimpleChanges): void {
    this.featuretteText = this.isOdd(changes['value']?.currentValue) ? signal('col-md-7'): signal('col-md-7 order-md-2')
    this.featuretteImage = this.isOdd(changes['value']?.currentValue) ? signal('col-md-5'): signal('col-md-5 order-md-1')

  }
  isOdd(value: number | undefined)
  {
   if (value === undefined) {
    return false; // or throw an error if you prefer
  }
  return value % 2 !== 0;
  }
}
