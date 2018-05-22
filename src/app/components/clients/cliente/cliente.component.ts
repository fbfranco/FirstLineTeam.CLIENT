import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import { ClientService } from '../../../services/client.service';
import { Client} from '../../../models/client';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClientList();
  }

  //Submit Form
  onSubmit(clientForm : NgForm){
    this.clientService.postClient(clientForm.value);
    this.resetForm(clientForm);
  }

  //Reset Form
  resetForm(clientForm : NgForm){
    if (clientForm != null) {
      clientForm.reset();
      this.clientService.selectedClient = new Client();
    }  
  }

}
