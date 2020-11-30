import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscaCepService } from 'src/app/shared/service/busca-cep.service';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss']
})
export class BuscaCepComponent implements OnInit {

  buscaCepForm: FormGroup;

  constructor(
    private fb: FormBuilder,
     private buscaCepService: BuscaCepService,
  ) { }

  ngOnInit() {
    this.buscaCepForm = this.fb.group({
      cep: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{5}-[0-9]{3}$')
        ]
      ],
    });
  }

  public onSubmit(): void {
    this.buscaCepService.downloadFile(this.buscaCepForm.value.cep);
  }

}
