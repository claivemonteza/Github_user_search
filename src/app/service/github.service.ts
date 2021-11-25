import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IGitHub } from '../model/github.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GitHubService {

    private api = `${environment.api}`;
    constructor(private _http: HttpClient) { }

    getUser(username: string):Observable<IGitHub>{
        return this._http.get<IGitHub>(`${this.api}/${username}`);
    }

    getRepos(username: string):Observable<IGitHub>{
        return this._http.get<IGitHub>(`${this.api}/${username}/repos?sort=created`);
    }

}