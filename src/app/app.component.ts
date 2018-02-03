import { Component, OnInit } from '@angular/core';
import { AsideDirective } from './aside.directive';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  private isDesktop:boolean;
  private isMobile:boolean;
  constructor() {
    this.isDesktop = true;
    this.isMobile = false;
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
      this.isDesktop = false;
      this.isMobile = true;
    }
  }

  ngOnInit()
  {
    if(window.innerHeight > window.innerWidth)
    {
      this.isDesktop = false;
    }
    if(!this.isMobile && this.isDesktop)
    {
      $(window).scroll(function(e) {      
        let scroller_anchor = $(".scroller_anchor").offset().top;
        //console.log('scroller_anchor ',scroller_anchor, ' @@ ', $(this).scrollTop())
        if($(this).scrollTop() >= scroller_anchor)
        {
          $("aside, .right-menu").css({
            'position':'fixed',
            'top': '0px'
          })
        }
        else
        {
          $("aside, .right-menu").css({
            'position':'absolute'
          })
        }
      })
    }
  }
}
