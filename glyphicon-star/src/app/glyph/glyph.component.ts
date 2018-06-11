import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glyph',
  templateUrl: './glyph.component.html',
  styleUrls: ['./glyph.component.css']
})

export class GlyphComponent implements OnInit {

  isFavorite = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
