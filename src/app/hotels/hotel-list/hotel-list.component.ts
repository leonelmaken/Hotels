import { Component, OnInit } from '@angular/core';
import { IHotel } from '../shared/models/hotel';
import { HotelListService } from '../shared/services/hotel-list.service';
@Component({
    selector:'app-hotel-list',
    templateUrl:'./hotel-list.component.html',
    styleUrls:['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit{


    public title = 'Listes hotels';

    public filteredHotels : IHotel[] = [];

    public receivedRating!: string;

    public hotels : IHotel[] = [];

    public errMsg: string | undefined;

    constructor (private hotelListService : HotelListService){

    }

    public showBadge : Boolean | undefined;
    private _hotelFilter = 'mot';
    public toggleIsNewBadge(): void{
        this.showBadge = !this.showBadge;
    }
     ngOnInit() {
        this.hotelListService.getHotels().subscribe({
            next : hotels => {
               this.hotels = hotels,
               this.filteredHotels = this.hotels;
            },
            error : err => this.errMsg = err
        });

        this.hotelFilter = '';
    }
    public get hotelFilter():string{
        return this._hotelFilter;
    }
    public set hotelFilter(filter : string){
        this._hotelFilter = filter;

        this.filteredHotels = this.hotelFilter ? this.filterHotles(this.hotelFilter) : this.hotels
    }

    private filterHotles(criteria : string) : IHotel[]{

        criteria = criteria.toLocaleLowerCase();
        const res = this.hotels.filter(
            (hotel:IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1
        );
        return res;
    }

    public receiveRatingClicked(message : string) : void{

        this.receivedRating = message
    }
}
