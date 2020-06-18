import { Component, OnInit, Inject, OnDestroy, OnChanges } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Items } from '../../data/works';
import { DataService } from '../../services/data.service';
import $ from 'jquery';

@Component({
  selector: 'markostalma-work-single',
  templateUrl: './work-single.component.html',
  styleUrls: ['./work-single.component.css'],
  providers: [ DataService ]
})

export class WorkSingleComponent implements OnInit, OnDestroy {
  items: Items[];
  private item: any = [];
  sliderItem: any = [];
  private nextPrevious: any = [];
  private slugname: string;
  private nextEnable: boolean = true;
  private prevEnable: boolean = true;
  private nextPreviousId: number;
  private sub: any;
  slideConfig = {};

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dataService: DataService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {this.items = this.dataService.loadItems()}


  // Load Single Work
  loadItems(){
    this.sub = this.activeRoute.params.subscribe(params => {
      this.sliderItem = [];
      this.slugname = params['slugname'];
      this.item = this.dataService.loadItems().find( (data) => data.slugname == this.slugname);
      this.sliderItem.push(this.item['otherImg'])
      console.log(this.sliderItem);
      this.configCarousel();
    });

  }

  configCarousel(){
    this.slideConfig = {
      "slidesToShow": 1,
      "slidesToScroll": 1,
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
    this.sliderItem = [];
  }

  ngOnInit() {
    this.document.body.classList.remove('about-page', 'work-page', 'home-page', 'process-page', 'error-page');
    this.document.body.classList.add('single-work-page', this.item.type);
    this.loadItems();
  }

  ngOnChanges(){
    this.sliderItem = [];
    this.sub.unsubscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sliderItem = [];
    this.document.body.classList.remove(this.item.type);
  }

}
