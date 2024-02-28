import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoPesquisaComponent } from './resultado-pesquisa.component';

describe('ResultadoPesquisaComponent', () => {
  let component: ResultadoPesquisaComponent;
  let fixture: ComponentFixture<ResultadoPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadoPesquisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
