import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class CoreService {
  constructor(private http: HttpClient) {}
  getCall(url: string, params?: Object): Promise<any> {
    return this.http.get(url + '?' + this.jsonToURLParams({
      appid: environment.weather.api.key,
      ...params,
    })).toPromise();
  }
  private jsonToURLParams(obj: Object) {
    return Object
      .keys(obj)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
      .join('&');
  }
}
