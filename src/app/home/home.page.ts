import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  drugs: any;

  constructor(private httpClient: HttpClient) {
    this.drugs = this.httpClient.get()
  }

}
 