import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCarrinhoPage } from './produtos-carrinho.page';

describe('ProdutosCarrinhoPage', () => {
  let component: ProdutosCarrinhoPage;
  let fixture: ComponentFixture<ProdutosCarrinhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosCarrinhoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosCarrinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
