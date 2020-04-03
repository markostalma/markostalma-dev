import { Component, } from '@angular/core';
import $ from 'jquery';
import { RouterOutlet } from '@angular/router';
import './route-animations.component'
import { slider } from './route-animations.component';


@Component({
  selector: 'app-root',
  animations: [ slider ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(){};

  onActivateRouting() {
    window.scroll(0,0);
  }

  ngOnInit(): void {

    $(document).ready(function(){
      // Hamburger Toggle menu
      $('.menu').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('open');
        $('ul.menu-slider').fadeToggle(180);
      });

      // Close menu on window click
      $(document).click( function(){
        $('.menu').removeClass('open');
        $('ul.menu-slider').hide();
      });
    });
    
  }
}
