import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    private subject = new Subject<any>();

    resourceUrl: string;

    constructor() {
    }

    broadCastData(data) {
        this.subject.next(data);
    }

    receiveData(): Observable<any> {
        return this.subject.asObservable();
    }

    clearData() {
        this.subject.next();
    }
}
