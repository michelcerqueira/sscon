import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCepComponent } from './lista-cep.component';

describe('ListaCepComponent', () => {
  let component: ListaCepComponent;
  let fixture: ComponentFixture<ListaCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
