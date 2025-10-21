import { Component } from '@angular/core';
import { FacebookService } from '../../../services/facebook.service';
import { FacebookPost } from '../../../core/facebookpost.model';
import { DatePipe } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { Router } from '@angular/router';
import { PageNavigationService } from '../../../services/page-navigation.service';

registerLocaleData(localePl);

@Component({
  selector: 'app-newscard',
  imports: [TranslatePipe],
  templateUrl: './newscard.component.html',
  styleUrl: './newscard.component.css'
})
export class NewsCardComponent {

  isLoading = true;
  constructor(
    private fbService: FacebookService, 
    private translate: TranslateService,
    private router: Router,
    private pnService: PageNavigationService) { }

  posts: FacebookPost[] = [];
  ngOnInit(): void {
    this.fbService.getPosts().subscribe({
      next: (data) => {
        this.posts = data 
        .filter((r: any) => !!r.message)
        .map(post => ({
        ...post,
        formatted_date: this.getTranslatedDate(new Date(post.created_time)),
        created_date: new Date(post.created_time),
        title: this.getFirstSentence(post.message)
      }))
      .sort((a, b) => b.created_date.getTime() - a.created_date.getTime())
      .slice(0, 3);
      this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
      }
      
    });
  }

  public goToNews(id:string){
    this.pnService.setUserId(id);
     this.router.navigate(['/news']);
  }

   getFirstSentence(text: string): string {
    if (!text) return '';
    const match = text.match(/.*?[.!?:](\s|$)/);
    return (match ? match[0] : text).trim();
  }

  getTranslatedDate(date: Date): string | null {
    const pipe = new DatePipe(this.translate.getCurrentLang());
    return pipe.transform(date, 'd MMMM y');
  }
}