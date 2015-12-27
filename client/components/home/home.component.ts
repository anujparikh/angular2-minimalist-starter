import {Component} from 'angular2/core';
import {XLarge} from '../../directives/XLarge';

@Component({
  directives: [XLarge],
  selector: 'home',
  templateUrl: './components/home/home.component.html'
})
export class HomeComponent {}
