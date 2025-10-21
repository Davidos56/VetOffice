import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageNavigationService {

  private _newsId: string = "";
  constructor() { }



  setUserId(id: string) { this._newsId = id; }
  getUserId(): string | null { return this._newsId; }
}
