import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../services/review.service';
import { ReviewItem } from '../../../core/reviewitem.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  reviews: ReviewItem[] = [];
  loading = true;

   constructor(private reviewsService: ReviewService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
       this.reviewsService.getReviews().subscribe({
      next: (data) => {
        this.reviews = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  getSafeUrl(url: string): SafeUrl {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
