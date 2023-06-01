import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeixeService {
  constructor(private http: HttpClient) {}

  private host = 'http://localhost:8080/peixe';

  public postPeixe(obj: any) {
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
    return new Promise((ret) => {
      this.http.get(this.host).subscribe((Peixe) => {
        ret(Peixe);
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
    return new Promise((ret) => {
      this.http.delete(this.host + '{' + id + '}').subscribe((dados) => {
        console.log(dados);
      });
    });
  }
}
