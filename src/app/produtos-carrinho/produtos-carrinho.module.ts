import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdutosCarrinhoPage } from './produtos-carrinho.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosCarrinhoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProdutosCarrinhoPage]
})
export class ProdutosCarrinhoPageModule {}
