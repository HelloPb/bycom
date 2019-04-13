import { Component } from '@angular/core';
import { AppUpdatesService } from './shared/services/service-worker/app-updates.service';

@Component({
  selector: 'eod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byEod';
  /**
   *
   */
  constructor(private appUpdatesService: AppUpdatesService) {
  }
}
