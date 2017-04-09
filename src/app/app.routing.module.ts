import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ListingsComponent } from './listings/listings.component';
import { AddListingComponent } from './add-listing/add-listing.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listings', component: ListingsComponent },
    { path: 'listing/:id', component: ListingComponent },
    { path: 'add-listings', component: AddListingComponent }
 ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}