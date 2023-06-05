import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

interface Config {
  backend: string;
}
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(
    private http: HttpClient,
  ) { }

  public getConfig() {
    return this.http.get<Config>("assets/environments/environment.json");
  }

  public async getStations() {
    const config = await firstValueFrom(this.getConfig());
    return await firstValueFrom(this.http.get<{stations: Array<{
      name: string,
      lat: number,
      lng: number,
      id_station: string,
    }>}>(config.backend + 'stations.json'));
  }

}
