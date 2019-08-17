import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClusterService {

    private subject = new Subject<any>();


    resourceUrl: string;

    constructor() {
    }


    broadCastCluster(data) {
        this.subject.next(data);
    }

    receiveCluster(): Observable<any> {
        return this.subject.asObservable();
    }


}
