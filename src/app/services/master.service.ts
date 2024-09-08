import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // constructor() { }
  http= inject(HttpClient);
getDesignation():Observable<ApiResponseModel>{
  return this.http.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/clientStrive/GetAllDesignation")
}

}
