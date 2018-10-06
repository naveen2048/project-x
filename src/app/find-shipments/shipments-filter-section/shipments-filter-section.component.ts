import { Component, OnInit ,ViewChild, ElementRef,NgZone} from '@angular/core';
import {MapsAPILoader } from '@agm/core';
@Component({
  selector: 'app-shipments-filter-section',
  templateUrl: './shipments-filter-section.component.html',
  styleUrls: ['./shipments-filter-section.component.css']
})
export class ShipmentsFilterSectionComponent implements OnInit {
@ViewChild('FromLocation') public fromLocation: ElementRef;
@ViewChild('ToLocation') public toLocation: ElementRef;
  constructor(private mapsAPILoader:MapsAPILoader,private ngZone:NgZone) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(
      ()=>{
        let fromautocomplete=new google.maps.places.Autocomplete(this.fromLocation.nativeElement);

        fromautocomplete.addListener("place_changed",()=>{
          this.ngZone.run(()=>{
            let place:google.maps.places.PlaceResult=fromautocomplete.getPlace();
            if(place.geometry===undefined || place.geometry===null)
            {
              return;
            }
          })
        })

        let toautocomplete=new google.maps.places.Autocomplete(this.toLocation.nativeElement);

        toautocomplete.addListener("place_changed",()=>{
          this.ngZone.run(()=>{
            let place:google.maps.places.PlaceResult=toautocomplete.getPlace();
            if(place.geometry===undefined || place.geometry===null)
            {
              return;
            }
          })
        })
      }
    )
  }

}
