import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  id: any;
  listing: any;
  imageUrl: any;

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;
      console.log(this.listing);
      
    });
  }

}
