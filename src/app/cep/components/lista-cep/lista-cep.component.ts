import { Component, OnInit } from '@angular/core';
import { CepInterface } from 'src/app/shared/interfaces/cep.interface';
import { SubjectService } from 'src/app/shared/service/SubjectService';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-lista-cep',
  templateUrl: './lista-cep.component.html',
  styleUrls: ['./lista-cep.component.scss']
})
export class ListaCepComponent implements OnInit {
  displayedColumns: string[] = ['cep', 'logradouro', 'dataHora', 'excluir'];
  public listaCep: Array<CepInterface> = new Array();
  readonly LISTACEP = 'listaCep';

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    if (localStorage.getItem(this.LISTACEP) !== null) {
      this.listaCep = JSON.parse(localStorage.getItem(this.LISTACEP));
    }
    this.subjectService.$subjectCep.subscribe(data => {
      const dataAtual = new Date();
      data['dataHora'] = `${dataAtual.toLocaleDateString()} - ${dataAtual.toLocaleTimeString()}`;
      const dataEdit = this.listaCep.find(
        ( dataObject: CepInterface) => dataObject.cep === data.cep);
        if (dataEdit === undefined) {
          this.listaCep.push(data);
          localStorage.setItem(this.LISTACEP, JSON.stringify(this.listaCep));
          this.listaCep =  JSON.parse(localStorage.getItem(this.LISTACEP));
        }
    });
  }

  public excluir(cep: CepInterface): void {
    const cepObject = this.listaCep.filter(
      (dataObject:  CepInterface) => dataObject.cep !== cep.cep);
      console.log("cepObject", cepObject)
      this.listaCep = cepObject;
      localStorage.setItem(this.LISTACEP, JSON.stringify(cepObject));
  }
}
