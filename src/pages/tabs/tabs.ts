import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { WelfarePage } from '../welfare/welfare';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = ContactPage;
	tab2Root = AboutPage;
	tab3Root = HomePage;
	tab4Root = WelfarePage;
	tab5Root = MinePage;

	constructor() {

	}
}
