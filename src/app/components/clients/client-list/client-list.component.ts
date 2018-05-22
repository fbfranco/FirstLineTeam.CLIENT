import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor( public clientService : ClientService) { }

  ngOnInit() {
    this.clientService.getClientList();
  }

}
