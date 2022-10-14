import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { LoadingService } from './core/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading = false

  constructor(
    private _loading: LoadingService,
  ) {
    this.listenToLoading()

  }

  listenToLoading(): void {

    this._loading.loadingSub
      .pipe(delay(0))
      .subscribe((loading: boolean) => {

        this.loading = loading

      })

  }

}
