import { Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  selectedClient: Client = new Client()  ;
  clientList: Client[];

  constructor(private http : Http) { }

  getClientList(){
    this.http.get('http://localhost:57135/api/Clients')
    .map((data : Response) =>{
      return data.json() as Client[];
    }).toPromise().then(x => {
      this.clientList = x;
    })
  }

  getClient(id : Number){
    this.http.get('http://localhost:57135/api/Clients/'+id)
    .map((data : Response) =>{
      return data.json() as Client[];
    }).toPromise().then(x => {
      this.clientList = x;
    })
  }

  postClient(model : Client){
    var body = JSON.stringify(model);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:57135/api/Clients',body,requestOptions).map(x => x.json());
  }

  putClient(id, model) {
    var body = JSON.stringify(model);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:57135/api/Clients/' + id, body,requestOptions).map(res => res.json());
  }

  deleteClient(id: number) {
    return this.http.delete('http://localhost:57135/api/Clients/' + id).map(res => res.json());
  }
}
