import { Component, OnInit, OnDestroy,  Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import $ from 'jquery';

@Component({
  selector: 'markostalma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.document.body.classList.add('home-page');
    this.document.body.classList.remove('about-page', 'work-page', 'single-work-page', 'process-page', 'error-page');

    $(document).ready(function(){
      // Navigation menu on scroll
      $(window).scroll(function () {
          if($("body").hasClass("home-page")){
            if ($(this).scrollTop() < $('section[data-anchor="about"]').offset().top) {
              $('#navigation-menu span').removeClass('active');
            }
            if ($(this).scrollTop() >= $('section[data-anchor="about"]').offset().top) {
              $('#navigation-menu span').removeClass('active');
              $('#navigation-menu span:eq(0)').addClass('active');
            }
            if ($(this).scrollTop()  >= $('section[data-anchor="work"]').offset().top - 300) {
              $('#navigation-menu span').removeClass('active');
              $('#navigation-menu span:eq(1)').addClass('active');
            }
            if ($(this).scrollTop() >= $('section[data-anchor="process"]').offset().top - 400) {
              $('#navigation-menu span').removeClass('active');
              $('#navigation-menu span:eq(2)').addClass('active');
            }
            if ($(this).scrollTop() >= $('section[data-anchor="contact"]').offset().top - 400) {
              $('#navigation-menu span').removeClass('active');
              $('#navigation-menu span:eq(3)').addClass('active');
              $('#navigation-menu span').css('background-color', '#450468');
              $('<style data-test>#navigation-menu span.active:before { border-color: #450468; }</style>').appendTo('head');
              $('<style data-test>#navigation-menu span:hover:before { border-color: #450468; }</style>').appendTo('head');
            }
            else{
              $('#navigation-menu span').css('background-color', '#ffffff');
              $('#navigation-menu span:before').css('border-color', '#ffffff');
                $("style[data-test]").remove();
            }
          }
      });

    });
  }

  ngOnDestroy(): void {
  }

}
