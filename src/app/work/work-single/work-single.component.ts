import { Component, OnInit, Inject, OnDestroy, DoCheck, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Items } from '../../data/works';
import { DataService } from '../../services/data.service';
import $ from 'jquery';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'markostalma-work-single',
  templateUrl: './work-single.component.html',
  styleUrls: ['./work-single.component.css'],
  providers: [ DataService ]
})

export class WorkSingleComponent implements OnInit, OnDestroy, DoCheck {
  items: Items[];
  private item: any = [];
  sliderItem: any = [];
  slides: any = [];
  private nextPrevious: any = [];
  private slugname: string;
  private nextEnable: boolean = true;
  private prevEnable: boolean = true;
  private nextPreviousId: number;
  private sub: any;
  // slideConfig = {};

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dataService: DataService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.configCarousel();
    this.items = dataService.loadItems();
    this.loadItems();
    this.loadSliderImage();
  }


  // Load Single Work
  loadItems(){
    this.sub = this.activeRoute.params.subscribe(params => {
      this.slugname = params['slugname'];
      this.item = this.dataService.loadItems().find( (data) => data.slugname == this.slugname );
      this.sliderItem.push(this.item.otherImg);
    });
  }

  // Load Slider Image
  loadSliderImage(){
    this.slides = this.item.otherImg;
    this.router.events.subscribe(() => {
      this.slides = this.item.otherImg;
    });
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "lazyLoad": "ondemand",
    "autoplay": true,
    "adaptiveHeight": true,
    "fade": true,
    "arrows": false,
    "dots": true,
    "dotsClass": "slick-dots custom-dots",
    "infinite": true
  }


  // configCarousel(){
  //   this.slideConfig = {
  //     "slidesToShow": 1,
  //     "slidesToScroll": 1,
  //     "lazyLoad": "ondemand",
  //     "autoplay": true,
  //     "adaptiveHeight": true,
  //     "fade": true,
  //     "arrows": false,
  //     "dots": true,
  //     "dotsClass": "slick-dots custom-dots",
  //     "infinite": true
  //   }
  // }

  slickInit(slideEvent) {
    console.log(
      slideEvent.slick.$slider.find('img')
        .first()
        .on('load', function () {
          $(window).trigger('resize');
        })
    );
    this.slideConfig;
    // this.configCarousel();
    slideEvent = {
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "lazyLoad": "ondemand",
      "autoplay": true,
      "adaptiveHeight": true,
      "fade": true,
      "arrows": false,
      "dots": true,
      "dotsClass": "slick-dots custom-dots",
      "infinite": true
    }
  }


  // Go to next work
  goNext(){
    this.nextPreviousId = this.item.id + 1;
    // console.log(this.nextPreviousId);
    this.nextPrevious = this.dataService.loadItems().find( (data) => data.id == this.nextPreviousId );
    if(this.nextPreviousId <= this.items.length){
      window.scroll(0,0);
      this.prevEnable = true;
      this.nextEnable = true;
      this.activeRoute.queryParams.subscribe(() => {
        this.router.navigate(['/selected-work/' + this.nextPrevious.slugname ]);
      });
    }
    if(this.nextPreviousId == this.items.length){
      this.nextEnable = false;
    }
  }
  // Go to previous work
  goPrevious(){
    this.nextPreviousId = this.item.id - 1;
    // console.log(this.nextPreviousId);
    this.nextPrevious = this.dataService.loadItems().find( (data) => data.id == this.nextPreviousId );
    if(this.nextPreviousId >= 1){
      window.scroll(0,0);
      this.prevEnable = true;
      this.nextEnable = true;
      this.activeRoute.queryParams.subscribe(() => {
        this.router.navigate(['/selected-work/' + this.nextPrevious.slugname ]);
      });
    }
    if(this.nextPreviousId == 1 || this.nextPreviousId == 0){
      this.prevEnable = false;
    }
  }
  // Go to selected works page
  goBack() {
    this.router.navigate(['/selected-works']);
  }

  ngOnInit() {
    this.document.body.classList.remove('about-page', 'work-page', 'home-page', 'process-page', 'error-page');
    this.document.body.classList.add('single-work-page', this.item.type);
  }

  ngDoCheck(){
    // this.configCarousel();
    // $('.slick-list').css({ height: "auto" });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.document.body.classList.remove(this.item.type);
  }

}
