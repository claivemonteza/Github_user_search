import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private mode = new BehaviorSubject(Theme.dark);

  constructor() { }

  get mode$(): Observable<Theme> {
    return this.mode.asObservable();
  }

  toggleMode() {
    if (this.mode.value === Theme.dark) {
      this.mode.next(Theme.light);
    } else {
      this.mode.next(Theme.dark);
    }
  }
}
