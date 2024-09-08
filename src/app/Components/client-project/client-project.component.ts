import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/client';
import { single } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule,DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

    projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    ProjectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  })

  clientSer = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];
  firstName = signal("Angular 18");
  projectList = signal<ClientProjectComponent[]>([]);



  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProject();
  }


  getAllEmployee() {
    this.clientSer.getAllEmployee().subscribe((res: ApiResponseModel) => {
      this.employeeList = res.data;
    })
  }

  getAllClient() {
    this.clientSer.getAllClients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    })
  }

  getAllClientProject(){
    this.clientSer.getAllClientsProjects().subscribe((res: ApiResponseModel)=>{
      this.projectList.set(res.data);
    })
  }


  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger
    this.clientSer.addClientProjectUpdate(formValue).subscribe((res: ApiResponseModel) => {
      if (res.result) {
        alert("Project Complete successfully");
      }
      else {
        alert("Api error");
      }
    })
  }
}
