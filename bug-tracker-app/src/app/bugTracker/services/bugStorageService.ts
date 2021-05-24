import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn : 'root'
})
export class BugStorageService{
    localhost : string ="http://localhost:3000/posts";
    constructor(private httpClient: HttpClient){
        
    }

    public getAll(): Observable<any []>{
       return this.httpClient.get<any>(this.localhost);

    }
}