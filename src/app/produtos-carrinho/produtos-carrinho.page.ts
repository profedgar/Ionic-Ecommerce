import { Component, OnInit } from '@angular/core';
import { ProdutosCarrinhos } from '../Models/ProdutosCarrinhos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Carrinho } from './../Models/Carrinho';

@Component({
  selector: 'app-produtos-carrinho',
  templateUrl: './produtos-carrinho.page.html',
  styleUrls: ['./produtos-carrinho.page.scss'],
})
export class ProdutosCarrinhoPage implements OnInit {

  url="http://127.0.0.1:3333";

  produtoscarrinhos:ProdutosCarrinhos[];
  carrinhos:Carrinho[];
  carrinho:Carrinho;
  carrinhoId:number;

  constructor(public route:ActivatedRoute, public http:HttpClient, public router:Router) {

  }

  ngOnInit() {
    this.getCarrinho();
    
  }

  getCarrinho(){
    this.carrinho = new Carrinho();
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');  
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', "*"); 
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, application/json");

    this.http.get<Carrinho[]>(this.url+"/carrinhoaberto").subscribe(
      resultado=>{
        this.carrinhos = resultado;
        this.carrinho = this.carrinhos[0];
        this.carrinhoId = this.carrinho.id;
        this.getProdutosCarrinho(this.carrinhoId);
      }
    );
    
  }

  getProdutosCarrinho(id:number){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');  
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', "*"); 
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, application/json");

    this.http.get<ProdutosCarrinhos[]>(this.url+"/produtoscarrinho/"+id).subscribe(
      resultProdutosCarrinho=>{
        
        this.produtoscarrinhos = resultProdutosCarrinho;
        
        console.log(this.produtoscarrinhos);
        
      }
    )
  }



}
