import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'add-carrinho', loadChildren: './add-carrinho/add-carrinho.module#AddCarrinhoPageModule' },
  { path: 'produtoscategoria/:id', loadChildren: './produtos/produtos.module#ProdutosPageModule' },
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosPageModule' },
  { path: 'add-carrinho/:id', loadChildren: './add-carrinho/add-carrinho.module#AddCarrinhoPageModule' },
  { path: 'produtos-carrinho', loadChildren: './produtos-carrinho/produtos-carrinho.module#ProdutosCarrinhoPageModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
