import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peixe } from '../interface/interface.peixe';

@Injectable({
  providedIn: 'root',
})
export class PeixeService {
  constructor(private http: HttpClient) {}

  private host = 'http://localhost:8080/peixe';

  public postPeixe(obj: Peixe) {
    return new Promise((ret) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');

      this.http
        .post(this.host, obj, { headers: headers })
        .subscribe((Peixe) => {
          ret(Peixe);
        });
    });
  }

  public getAllPeixes() {
    return new Promise((resolve) => {
      this.http.get(this.host).subscribe((response: any) => {
        const peixes = response.content;
        resolve(peixes);
      });
    });
  }

  public getPeixeById(id: number) {
    return new Promise((ret) => {
      this.http.get(this.host + '{' + id + '}').subscribe((Peixe) => {
        ret(Peixe);
      });
    });
  }

  public deletePeixe(id: number) {
    return new Promise<void>((resolve) => {
      this.http.delete(this.host + '/' + id).subscribe((dados) => {
        resolve();
      });
    });
  }
}
