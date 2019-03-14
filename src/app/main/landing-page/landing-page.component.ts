import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { container } from '@angular/core/src/render3/instructions';
import { RoomsComponent } from '../landing-page/rooms/rooms.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChild('parentRoot', { read: ViewContainerRef }) container: ViewContainerRef;
  conditionClick: boolean;

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    
  }
  clickRooms() {
    const componentFactory = this.factoryResolver.resolveComponentFactory(RoomsComponent);
    this.container.clear();
    this.conditionClick = true;
    const componentA = this.container.createComponent(componentFactory);
    componentA.instance.conditionClickRooms = this.conditionClick;

  }
}
