﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
	constructor(private _http: Http) { }

	get(url: string): Observable<any> {
		return this._http.get(url)
			.map((response: Response) => <any>response.json())
			.catch(this.handleError);
	}

	byId(url: string, id: AAGUID): Observable<any> {
		return this._http.get(url+id)
			.map((response: Response) => <any>response.json())
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}