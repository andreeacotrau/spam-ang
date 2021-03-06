import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from 'src/app/shared/data-types/Job';
import { environment } from 'src/environments/environment';
import { AuthDataStorage } from 'src/app/security/auth-data-storage';
import { HttpParamsOptions } from '@angular/common/http/src/params';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient,
              private service : AuthDataStorage) { }

  public getJobs(): Observable<Job[]> {
    var url = `${environment.apiUrl}/unassignedJobs`;
    return this.http.get<Job[]>(url);
  }

  public getJobsByType(type){
    var url = `${environment.apiUrl}/jobsByType/${type}`;
    return this.http.get<Job[]>(url);
  }

  public getAssignedJobs(): Observable<Job[]> {
    var url = `${environment.apiUrl}/assignedJobs`;
    var httpOptions = {
      headers: new HttpHeaders({'token': this.service.getJwtToken()})
    };
    return this.http.get<Job[]>(url,httpOptions);
  }

  public getMyJobs(): Observable<Job[]> {
    var url = `${environment.apiUrl}/createdJobs`;
    var httpOptions = {
      headers: new HttpHeaders({'token': this.service.getJwtToken()})
    };
    return this.http.get<Job[]>(url,httpOptions);
  }

  public getById(id: number): Observable<Job>{
    var url = `${environment.apiUrl}/getJob/${id}`;
    return this.http.get<Job>(url);
  }

  public postJob(job: Job) {
    var url = `${environment.apiUrl}/job`;
    var httpOptions = {
      headers: new HttpHeaders({'token': this.service.getJwtToken()})
    };
    return this.http.post(url, job, httpOptions);
  }

  public putJob(job: Job){
    var url = `${environment.apiUrl}/updateJob`;
    var httpOptions = {
      headers: new HttpHeaders({'token': this.service.getJwtToken()})
    };
    return this.http.put(url, job, httpOptions);
  }

  public apply(id:number){
    var url = `${environment.apiUrl}/applyToJob/${id}`;
    var httpOptions = {
      headers: new HttpHeaders({'token': this.service.getJwtToken()})
    };
    return this.http.put(url, null, httpOptions);
  }

  public unapply(id:number){
    var url = `${environment.apiUrl}/unapplyToJob/${id}`;
    var httpOptions = {
      headers: new HttpHeaders({'token': this.service.getJwtToken()})
    };
    return this.http.put(url, null, httpOptions);
  }
}
