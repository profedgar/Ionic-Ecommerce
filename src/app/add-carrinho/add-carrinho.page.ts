import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Carrinho } from './../Models/Carrinho';
import { ProdutosCarrinhos } from '../Models/ProdutosCarrinhos';
import { Produto } from '../Models/Produto';

@Component({
  selector: 'app-add-carrinho',
  templateUrl: './add-carrinho.page.html',
  styleUrls: ['./add-carrinho.page.scss'],
})
export class AddCarrinhoPage implements OnInit {

  url="http://127.0.0.1:3333";

  produtoscarrinhos:ProdutosCarrinhos;
  produto:Produto;
  carrinho:Carrinho[];

  carrinhocompra:Carrinho;

  constructor(public route:ActivatedRoute, public http:HttpClient, public router:Router) { 
    this.produto = new Produto();

    this.route.paramMap.subscribe( (params:ParamMap) => {
      this.produto.id = +params.get('id'); 
    });

    this.produtoscarrinhos=new ProdutosCarrinhos();
    this.produtoscarrinhos.produtoId = this.produto.id;    
  }

  ngOnInit() {
    this.getProduto();
    this.getCarrinho();
  }

  addCarrinho(){
    this.carrinhocompra = new Carrinho();
    this.carrinhocompra.status = "aberto";
    
    this.http.post(this.url+"/carrinhos",this.carrinhocompra).subscribe(
      resultado=>{
        this.router.navigate(['/produtoscategoria/'+this.produto.id]);
        this.produtoscarrinhos=new ProdutosCarrinhos();
      }
    );


  }

  editCarrinho(){

    this.http.put(this.url+"/carrinhos/"+this.carrinho[0].id ,this.carrinhocompra).subscribe(
      resultado=>{
        this.router.navigate(['/produtoscategoria/'+this.produto.id]);
      });    
  }    

  addProdutoCarrinho(){

    if(this.carrinho.length == 0){
      console.log("não Possui Carrinho");
      this.addCarrinho();
    }else{
      console.log("Possui Carrinho");
      this.editCarrinho();
    }

    
    this.getCarrinho();

    this.produtoscarrinhos.carrinhoId = this.carrinho[0].id;


  

    this.http.post(this.url+"/produtoscarrinhos",this.produtoscarrinhos).subscribe(
      resultado=>{
        this.router.navigate(['/produtoscategoria/'+this.produto.id]);
        this.produtoscarrinhos=new ProdutosCarrinhos();
      }
    )   

  }

  getProduto(){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');  
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', "*"); 
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, application/json");

    this.http.get<Produto>(this.url+"/produtos/"+this.produto.id).subscribe(
      resultado=>{
        this.produto = resultado;
      }
    )
  }


  getCarrinho(){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');  
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', "*"); 
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, application/json");

    this.http.get<Carrinho[]>(this.url+"/carrinhoaberto").subscribe(
      resultado=>{
        this.carrinho = resultado;
      }
    )
  }

  getCarrinhoAberto(){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');  
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', "*"); 
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, application/json");

    this.http.get<Carrinho>(this.url+"/carrinhoaberto").subscribe(
      resultado=>{
        this.carrinhocompra = resultado;
      }
    )
  }  

}
