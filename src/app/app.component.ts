import { Component } from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RestService  } from './rest.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiUrl = 'https://localhost:11169/api/';
  githubData:any;

  constructor(private httpClient: Http, restService: RestService){
    console.log('Hello follow user');
    restService.getProducts().subscribe(a=> this.githubData = a)
  }
}
