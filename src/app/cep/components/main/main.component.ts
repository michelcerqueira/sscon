import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/shared/service/SubjectService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public exibe = false;
  constructor(private subjectService: SubjectService) {
  }

  ngOnInit() {
    this.subjectService.$subjectLoading.subscribe((data: boolean) => {
      this.exibe = data;
    });
  }

}
