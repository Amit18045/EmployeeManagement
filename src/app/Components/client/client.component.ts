import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel } from '../../model/interface/role';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from '../../resusableComponents/alert/alert.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,UpperCasePipe,DatePipe,AlertComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);
currentDate: Date=new Date();


  ngOnInit(): void {
    this.loadClient();
  }


  loadClient() {
    this.clientService.getAllClients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    })
  }
  onSaveClient() {
    debugger
    this.clientService.addUpdateClients(this.clientObj).subscribe((res: ApiResponseModel) => {
      if (res.result) {
        alert("Client Created Success");
        this.loadClient();
        this.clientObj =new Client();
      }
    })

  }


  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete");
    if (isDelete) {
      this.clientService.deleteClientBYID(id).subscribe((res: ApiResponseModel) => {
        if (res.result) {
          alert("Client deleted Success");
          this.loadClient();
          this.clientObj = new Client();
        }
      })
    }
  }
 


  onEdit(data:Client){
    this.clientObj=data;
  }

  onReset(){
    this.clientObj=new Client();
  }

}
