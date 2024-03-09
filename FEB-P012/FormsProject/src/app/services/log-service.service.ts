import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor(public http: HttpClient) {
  
  }

  logAlteracoes = new Subject<string[]>();

  showLog(log: string[]){
    
    this.logAlteracoes.next([]);
    this.logAlteracoes.next(log);
    console.log('Log de valores e status: ', log);  
  }
}
