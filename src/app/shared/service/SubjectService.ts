import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CepInterface } from '../interfaces/cep.interface';

@Injectable()
export class SubjectService {
  public $subjectCep = new Subject<CepInterface>();
  public $subjectLoading = new Subject<boolean>();

  public updateCep(value: CepInterface): void {
      this.$subjectCep.next(value);
    }


  public updateLoading(value: boolean): void {
    this.$subjectLoading.next(value);
  }
}
