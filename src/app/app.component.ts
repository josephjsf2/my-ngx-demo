import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-ngx-demo';

  pager: any = { currentPage: 1 };

  source$: Observable<any>;

  ngOnInit(): void {
    this.source$ = this.reload();
  }
  reload(): Observable<any> {

    const p = { currentPage: this.pager.currentPage || 1 }; // create new object
    return of(p)
      .pipe(
        tap(console.log),
        tap(p => this.pager = p),
        delay(2000)
      );
  }

  onPageChanged(e: number) {
    console.log('App received new page', e);
    this.pager.currentPage = e;
    this.source$ = this.reload();
  }
}
