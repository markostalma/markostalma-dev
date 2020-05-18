import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'markostalma-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.css']
})
export class AboutHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Hover profile img
    $('#profile-img').hover(function () {
      $(this).attr('src', '../../assets/img/about-me-me-hover.png').fadeIn(5000);
      $('#profile-img').css('filter', 'drop-shadow(0 0 5px #000)');
      $('#profile-img').css('-webkit-filter', 'drop-shadow(0 0 5px #000)');
    }, function () {
      $(this).attr('src', '../../assets/img/about-me-me.png').fadeIn(7000);
      $('#profile-img').css('filter', 'none').fadeIn();
      $('#profile-img').css('-webkit-filter', 'none').fadeIn();
    });

  }

}
