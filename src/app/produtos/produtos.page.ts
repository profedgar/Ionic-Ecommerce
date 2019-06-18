import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Produto } from './../Models/Produto';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../Models/Carrinho';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  url="http://127.0.0.1:3333";

  produtos:Produto[];
  categoriaid:number;


  constructor(public route:ActivatedRoute, public http:HttpClient) {
    console.log("Teste");
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.categoriaid = +params.get('id');
    });
    console.log(this.categoriaid);
    
   }

  ngOnInit() {
    this.getprodutos();
  }

  getprodutos(){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');  
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', "*"); 
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, application/json");

    this.http.get<Produto[]>(this.url+"/produtoscategoria/"+this.categoriaid).subscribe(
      resultado => {
        this.produtos=resultado;
        console.log(this.produtos);
      }
    )
  }

}
