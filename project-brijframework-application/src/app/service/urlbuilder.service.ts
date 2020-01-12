import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { APP_CONFIG, AppConfig } from '../config/app-config';


@Injectable({
    providedIn: 'root'
})

export class UrlbuilderService {

    environmentName = environment.envName;
    serverApiURL: string = this.buildAPIURL();
    // interOperativeServerAPIURL: string = this.interOperativeAPIURL();

    constructor(@Inject(APP_CONFIG) private config: AppConfig) { }

    buildURL(key: string): string {
        let result: string;
        if (key != null && key.length > 0) {
            result = this.serverApiURL + key;
        }
        return result;
    }

    buildDetailURL(key: string, keyPoint: string): string {
        let result: string;
        if (key != null && key.length > 0) {
            result = this.serverApiURL + key;
        }
        if (keyPoint) {
            result = result + '/' + keyPoint;
        }
        return result;
    }

    buildUrlWithParam(key: string, Param: string, keypoint: any): string {
        let result: string;
        if (key != null && key.length > 0) {
            result = this.serverApiURL + key;
        }
        if (Param != null) {
            result = result + '/' + Param + '/' + keypoint;
        }
        return result;
    }

    buildInteroperativeURL(key: string): string {
        let result: string;
        if (key != null && key.length > 0) {
            //   result = this.interOperativeServerAPIURL + key;
        }
        return result;
    }

    buildDetailInteroperativeURL(key: string, detail: string): string {
        let result: string;
        if (key != null && key.length > 0) {
            //   result = this.interOperativeServerAPIURL + key;
        }
        if (detail) {
            result = result + '/' + detail;
        }
        return result;
    }
    buildUrlWithDateRange(key: string, startRange: string, startTime: any, endRange: any, endTime: any): string {
        let result: string;
        if (key != null && key.length > 0) {
            result = this.serverApiURL + key;
        }
        if (startRange != null) {
            result = result + '/' + startRange + startTime + endRange + endTime;
        }
        return result;
    }

    private buildAPIURL(): string {
        return environment.apiTargetServer;
    }

    // private interOperativeAPIURL(): string {
    // //    return environment.intraoperativeDataEndPoint;
    // }
}
