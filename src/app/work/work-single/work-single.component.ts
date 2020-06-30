import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Items } from '../../data/works';
import { DataService } from '../../services/data.service';
import $ from 'jquery';
// import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'markostalma-work-single',
  templateUrl: './work-single.component.html',
  styleUrls: ['./work-single.component.css'],
  providers: [ DataService ]
})

export class WorkSingleComponent implements OnInit, OnDestroy {
  items: Items[];
  private item: any = [];
  private nextPrevious: any = [];
  private slugname: string;
  private nextEnable: boolean = true;
  private prevEnable: boolean = true;
  private nextPreviousId: number;
  private sub: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dataService: DataService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.items = dataService.loadItems();
  }

  // Load Single Work
  loadSingleItems(){
    this.sub = this.activeRoute.params.subscribe(params => {
      this.slugname = params['slugname'];
      this.item = this.dataService.loadItems().find( (data) => data.slugname == this.slugname );
    });
  }

  // Slick slider config
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

  // Fix slider adaptive height bug on init
  slickInit(slideEvent) {
    slideEvent.slick.$slider.find('img').first().on('load', () => {
      let height = $('.slickImg-item').height();
      $('.slick-list').height(height);
      console.log("Slider Init");
    });
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
    this.loadSingleItems();
    this.document.body.classList.remove('about-page', 'work-page', 'home-page', 'process-page', 'error-page');
    this.document.body.classList.add('single-work-page', this.item.type);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.document.body.classList.remove(this.item.type);
  }

}
