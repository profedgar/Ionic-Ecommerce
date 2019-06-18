import { Categoria } from './../Models/Categoria';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

  url="http://127.0.0.1:3333";

  categorias:Categoria[];
  route: any;
  
  constructor(public http:HttpClient) {

  }

  ngOnInit() {
    this.getcategorias();
  }

  getcategorias(){
    console.log(this.url+"/categorias");
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');  
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', "*"); 
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, application/json");
  
    this.http.get<Categoria[]>(this.url+"/categorias").subscribe(
      resultado=>{
        this.categorias = resultado;
        console.log(this.categorias);
      }
    )
  }
  
  
}
