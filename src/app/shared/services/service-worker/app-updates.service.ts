import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval, concat } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppUpdatesService {

  constructor(appRef: ApplicationRef, updates: SwUpdate) {
    console.log('AppUpdatesService - called');
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(60000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
    updates.available.subscribe(event => {
      console.log('current version is - ', event.current);
      console.log('available version is', event.available);
    });

    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => {
        alert('fff');
        alert('fff1');
        document.location.reload();
      });
    });
  }
}
