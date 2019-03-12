import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import theiaEntry from './theia';

@Component({
  selector: 'theia-embed',
  templateUrl: './theia-embed.component.html',
  styleUrls: ['./theia-embed.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TheiaEmbedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      theiaEntry()
    })
}

}
