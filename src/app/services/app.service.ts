import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {
    constructor(private http: Http) { }

    sendItem(data: any[]) {
        return this.http.post('http://localhost:4031/items', data);
    }
    sendCategory(data: any[]) {
        return this.http.post('http://localhost:4031/categories', data);
    }

    getCategory(results: any) {
        return this.http.get('http://localhost:4031/categories', results);
    }
}
