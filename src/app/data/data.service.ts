import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
  postUserSettingsForms(userSettings: UserSettings): Observable<any> {
    // Sending data to server and waiting for the response is a Async operation.
    // return of(userSettings);
    // putsreq

    return this.http.post('https://putsreq.com/VpfOoFdWMezuOCVHdodB', userSettings);
  }
}
