import { Component, OnInit, Inject } from '@angular/core';
import { Items } from '../data/works'
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { DataService } from '../services/data.service';


@Component({
  selector: 'markostalma-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [ DataService ]
})

export class WorkComponent implements OnInit {
  items: Items[];
  counter: number = 4;
  selectedType = "0";

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    private dataService: DataService,
    private router: Router
  ) { }

  // Load Works Items
  loadItems(){
    if(this.counter <= 4 ){
      this.items = this.dataService.loadItems().slice(0, this.counter);
    }
  }

  // Get Filter Type
  filterType(type: any){
    this.selectedType = type;
  }

  // Load More Works
  loadMore(){
    this.counter = (this.counter + 2);
    if(this.selectedType === "0" && this.counter <= 20){
      this.items = this.dataService.loadItems().slice(0, this.counter);
    } else{
      this.items = this.dataService.loadItems().filter((workType) => workType.type == this.selectedType).slice(0, this.counter);
    }

    if(this.counter == 20){ // || this.counter > this.items.length
      $('#load-more').css('display', 'none');
    } else{
      $('#load-more').css('display', 'block');
    }

    console.log('Filter on Load more: ' + this.selectedType);
    console.log('Counter Load More: ' + this.counter);
    console.log('Length on load more: ' + this.items.length);
  }
  
  // Filter Works Categories
  changeFilter() {
    this.counter = 4;
    if (this.selectedType === "0" && this.counter <= 20){
      this.items = this.dataService.loadItems().slice(0, 4);
    } else{
      this.items = this.dataService.loadItems().filter((workType) => workType.type == this.selectedType).slice(0, this.counter);
    }

    if(this.counter == 20){ // || this.counter > this.items.length
      $('#load-more').css('display', 'none');
    } else{
      $('#load-more').css('display', 'block');
    }

    console.log('Type on filter: ' + this.selectedType);
    console.log('Counter on filter: ' + this.counter);
    console.log('Length on filter: ' + this.items.length);
  }

  ngOnInit(): void {
    this.document.body.classList.remove('about-page', 'home-page', 'single-work-page', 'process-page', 'error-page');
    this.document.body.classList.add('work-page');
    this.loadItems();
    this.changeFilter();
  }

  ngOnDestroy() {
    this.counter = 4;
  }

}
