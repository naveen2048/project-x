import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "location-search",
  template:`
    <div class="row col-sm-12">
    <div class="form-group">
    <label>{{caption}}</label>
    <input type="text" placeholder="Enter location" autocorrect="off" autocapitalize="off" spellcheck="off" #FromLocation class="form-control">
    </div>
    </div>
  `,
  styleUrls: []
})
export class LocationSearchComponent implements OnInit {

  @Input() caption:string;
  @Input() selectedLocation:any;
  @Output() selectedLocationChange = new EventEmitter<any>();

  @ViewChild("FromLocation") public location: ElementRef;
  private mapsAPILoader: MapsAPILoader;
  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // this.mapsAPILoader.load().then(() => {
    //   let fromautocomplete = new google.maps.places.Autocomplete(
    //     this.location.nativeElement
    //   );

    //   fromautocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       let place: google.maps.places.PlaceResult = fromautocomplete.getPlace();
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
    //       this.selectedLocation = place;
    //     });
    //   });
    // });
  }
}
