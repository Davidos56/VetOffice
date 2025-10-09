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
  currentIndex: number = 0;
  loading = true;

  constructor(private reviewsService: ReviewService, private sanitizer: DomSanitizer) { }

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

    // setInterval(() => this.nextSlide(), 4000); // zmiana co 4s
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    console.log(this.currentIndex)
  }
  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
