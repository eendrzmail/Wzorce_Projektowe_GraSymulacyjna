import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  constructor() { }

  allPages = KBPage;
  selectedPage: KBPage = KBPage.MAIN

  ngOnInit(): void {
  }

  changePage(page: KBPage) {
    this.selectedPage = page;
  }



}

enum KBPage {
  MAIN,
  MODELS,
  MODIFICATORS
}