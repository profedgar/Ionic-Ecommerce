import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ProdutosCarrinhos } from './Models/ProdutosCarrinhos';
import { Carrinho } from './Models/Carrinho';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  url="http://127.0.0.1:3333";
  produtoscarrinhos:ProdutosCarrinhos[];
  carrinho:Carrinho[];

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      badge: ''
    },
    {
      title: 'Categorias',
      url: '/list',
      icon: 'list',
      badge: ''
    },
    {
      title: 'Carrinho',
      url: '/produtos-carrinho',
      icon: 'cart',
      badge: ''
    }
 
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public route:ActivatedRoute, 
    public http:HttpClient, 
    public router:Router
  ) {

  
    this.initializeApp();

    //this.getProdutosCarrinho();

    //this.appPages[2].badge = String(this.produtoscarrinhos.length);

    /*if(this.appPages[2].title == 'Carrinho'){
      console.log(this.appPages[2].title)
    }*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
    this.getCarrinhoAberto();
    console.log('Esta aqui');
    console.log('Teste',this.carrinho);
  }

  getProdutosCarrinho(){

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');  
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', "*"); 
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, application/json");

    this.http.get<ProdutosCarrinhos[]>(this.url+"/produtoscarrinho/"+this.carrinho[0].id).subscribe(
      resultado=>{
        this.produtoscarrinhos = resultado;
      }
    )


  }  

  getCarrinhoAberto(){

    console.log('Iniciando metodo Carrinho aberto');
    
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');  
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', "*"); 
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, application/json");

    this.http.get<Carrinho[]>(this.url+"/carrinhoaberto").subscribe(
      resultado=>{
        console.log('Resultado ',resultado);
        this.carrinho = resultado;
      }
    )
    
  }  

}
