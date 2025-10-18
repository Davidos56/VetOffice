import { Component } from '@angular/core';
import { SpecializationitemComponent } from '../../features/components/specializationitem/specializationitem.component';
import { TranslatePipe } from '@ngx-translate/core';
import { FacebookService } from '../../services/facebook.service';
import { FacebookPost } from '../../core/facebookpost.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-specializationspage',
  imports: [SpecializationitemComponent, TranslatePipe],
  providers: [DatePipe],
  templateUrl: './specializationspage.component.html',
  styleUrl: './specializationspage.component.css'
})
export class SpecializationspageComponent {
  isLoading: boolean = true;
  constructor(private fbService: FacebookService){}
    posts: FacebookPost[] = [];
    ngOnInit(): void {
    this.fbService.getPosts().subscribe({
      next: (data) => {
        this.posts = data 
        .filter((r: any) => !!r.message)
        .map(post => ({
        ...post,
        formatted_date: new Date(post.created_time),
        title: this.getFirstSentence(post.message)
      }))
      .sort((a, b) => b.formatted_date.getTime() - a.formatted_date.getTime())
      .slice(0, 3);
      this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
      }
    });
  }

   getFirstSentence(text: string): string {
    if (!text) return '';
    const match = text.match(/.*?[.!?:](\s|$)/);
    return (match ? match[0] : text).trim();
  }
}
