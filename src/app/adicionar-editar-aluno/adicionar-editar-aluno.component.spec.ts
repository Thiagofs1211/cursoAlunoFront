import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEditarAlunoComponent } from './adicionar-editar-aluno.component';

describe('AdicionarEditarAlunoComponent', () => {
  let component: AdicionarEditarAlunoComponent;
  let fixture: ComponentFixture<AdicionarEditarAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarEditarAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEditarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
