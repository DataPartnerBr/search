import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  countries: string[];
  errorMessage: string;
  shownGroup = null;


  constructor(
    public navCtrl: NavController,
    public rest: RestApiProvider
  ) {}


  getCountries(){
    this.rest.getCountries()
    .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error
    );
  }

    ionViewDidLoad(){
      this.getCountries();
    }
    
    toggleGroup(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
    };
    isGroupShown(group) {
        return this.shownGroup === group;
    };




  }
