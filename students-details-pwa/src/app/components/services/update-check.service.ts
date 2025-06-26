import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first, interval, concat } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateCheckService {
  constructor(
    private appRef: ApplicationRef,
    private updateService: SwUpdate
  ) {}

  checkForUpdate() {
    const appIsStables = this.appRef.isStable.pipe(first((isStable) => isStable === true));
    const everTwoMinutes = interval(2 * 60 * 1000);
    const everyTwoMinutesOnceAppIsStables = concat(appIsStables, everTwoMinutes);
    everyTwoMinutesOnceAppIsStables.subscribe(async () => {
      try {
        const updateFound = await this.updateService.checkForUpdate();
        console.log(updateFound ? 'A new version is available.' : 'Already on the latest version.');
      } catch (err) {
        console.error('Failed to check for updates:', err);
      }
    });
  }
}
