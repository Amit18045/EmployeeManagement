import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../model/interface/role';
import { Constant } from '../constanct/constanct';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  http = inject(HttpClient);

  getAllClients(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.API_URL + Constant.API_MTHOD.GET_ALL_CLIENT)
  }

  getAllClientsProjects():Observable<ApiResponseModel>{
return this.http.get<ApiResponseModel>(environment.API_URL+Constant.API_MTHOD.GET_ALL_PROJECT)
  }


  getAllEmployee(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.API_URL + "GetAllEmployee");
  }

  addUpdateClients(obj: Client): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.API_URL + "AddUpdateClient", obj)
  }

  deleteClientBYID(id: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)
  }


  addClientProjectUpdate(obj: Client): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.API_URL + "AddUpdateClientProject", obj)
  }
}
