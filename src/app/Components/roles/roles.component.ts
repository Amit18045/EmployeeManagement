import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel,IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  // this is called old way to call 
  // constructor (private http:HttpClient){

  // }


//this is new way in angular 18
  http=inject(HttpClient);


roleList:IRole[]=[];

  ngOnInit(): void {
    this. getAllRoles()
  }

  getAllRoles(){
this.http.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/clientStrive/GetAllRoles").subscribe((res:ApiResponseModel)=>
{
this.roleList=res.data;
})
  }



























//   firstName: string="Angualr Tutorial";
//   angularVersion="Version 18";

//   version=18;
//   isActive:boolean=false;
//   currentDate: Date=new Date();

//   inputType: string ="radio";
//   selectedState: string='';

// showWelcomeAlert(){ 
// alert("Welcome Angular 18");
// }

// showMessage(message: string){
// alert(message);
// }
}
