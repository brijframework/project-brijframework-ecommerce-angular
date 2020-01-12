import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UrlbuilderService } from './urlbuilder.service';
import { APP_CONFIG, AppConfig } from '../config/app-config';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    constructor(private http: HttpClient, private urlbuilder: UrlbuilderService, @Inject(APP_CONFIG) private config: AppConfig) { }

    addApplication(application): Observable<any> {
        const url = this.urlbuilder.buildURL(this.config.application);
        const body = JSON.stringify(application);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        return this.http.post(url, body, { headers: headers });
    }

    editApplication(application): Observable<any> {
        const url = this.urlbuilder.buildURL(this.config.application);
        const body = JSON.stringify(application);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        return this.http.put(url, body, { headers: headers });
    }

    deleteApplication(applicationId): Observable<any> {
        const url = this.urlbuilder.buildDetailURL(this.config.application, applicationId);
        return this.http.delete(url);
    }

    getApplicationList() {
        const url = this.urlbuilder.buildURL(this.config.application);
        const headers = new HttpHeaders({ 'Skip-Prefix': 'false' });
        return this.http.get<any>(url, { headers: headers });
    }

    addApplicationRole(application): Observable<any> {
        const url = this.urlbuilder.buildURL(this.config.applicationrole);
        const body = JSON.stringify(application);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        return this.http.post(url, body, { headers: headers });
    }

    editApplicationRole(application): Observable<any> {
        const url = this.urlbuilder.buildURL(this.config.applicationrole);
        const body = JSON.stringify(application);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        return this.http.put(url, body, { headers: headers });
    }

    deleteApplicationRole(applicationId): Observable<any> {
        const url = this.urlbuilder.buildDetailURL(this.config.applicationrole, applicationId);
        return this.http.delete(url);
    }

    getApplicationRoleList() {
        const url = this.urlbuilder.buildURL(this.config.applicationrole);
        const headers = new HttpHeaders({ 'Skip-Prefix': 'false' });
        return this.http.get<any>(url, { headers: headers });
    }

    addApplicationFeature(application): Observable<any> {
        const url = this.urlbuilder.buildURL(this.config.applicationfeature);
        const body = JSON.stringify(application);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        return this.http.post(url, body, { headers: headers });
    }

    editApplicationFeature(application): Observable<any> {
        const url = this.urlbuilder.buildURL(this.config.applicationfeature);
        const body = JSON.stringify(application);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        return this.http.put(url, body, { headers: headers });
    }

    deleteApplicationFeature(applicationFeatureId): Observable<any> {
        const url = this.urlbuilder.buildDetailURL(this.config.applicationfeature, applicationFeatureId);
        return this.http.delete(url);
    }

    getApplicationFeatureList() {
        const url = this.urlbuilder.buildURL(this.config.applicationfeature);
        const headers = new HttpHeaders({ 'Skip-Prefix': 'false' });
        return this.http.get<any>(url, { headers: headers });
    }

    addApplicationEdition(application): Observable<any> {
        const url = this.urlbuilder.buildURL(this.config.applicationedition);
        const body = JSON.stringify(application);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        return this.http.post(url, body, { headers: headers });
    }

    editApplicationEdition(application): Observable<any> {
        const url = this.urlbuilder.buildURL(this.config.applicationedition);
        const body = JSON.stringify(application);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        return this.http.put(url, body, { headers: headers });
    }

    deleteApplicationEdition(applicationEditionId): Observable<any> {
        const url = this.urlbuilder.buildDetailURL(this.config.applicationedition, applicationEditionId);
        return this.http.delete(url);
    }

    getApplicationEditionList() {
        const url = this.urlbuilder.buildURL(this.config.applicationedition);
        const headers = new HttpHeaders({ 'Skip-Prefix': 'false' });
        return this.http.get<any>(url, { headers: headers });
    }

}
