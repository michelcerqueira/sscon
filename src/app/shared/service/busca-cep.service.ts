import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectService } from './SubjectService';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  readonly URL = 'http://viacep.com.br/ws/';

  constructor(private http: HttpClient, private subjectService: SubjectService) { }

  public downloadFile(cep: string): void  {
    this.loadingStatus(true);
    const cepConsulta = cep.replace('-', '');
    const url = `${this.URL}${cepConsulta}/json/`;
    const consulta = this.http.get(url, { observe: 'response' });
    consulta.subscribe((data) => {
      this.subjectService.updateCep(data.body);
        this.loadingStatus(false);
    },
      error => {
        this.loadingStatus(false);
        console.log(error);
      }
      )}
      private loadingStatus(status: boolean): void {
        this.subjectService.updateLoading(status)
    }
}
