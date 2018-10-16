import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	max:any=100;
	current:any=35;
	constructor(public navCtrl: NavController) {

	}

}
