import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.scss']
})
  

export class HeaderComponent {
  isNavbarCollapsed=true;
  
}
