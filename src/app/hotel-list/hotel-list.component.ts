import { Component } from '@angular/core';

@Component({
    selector:'app-hotel-list',
    templateUrl:'./hotel-list.component.html'
})

export class HotelListComponent {

    public title = 'Listes hotels';

    public hotels : any[] = [
    {
        hotelId:1,
        hotelName:"Karaibe",
        description:"Sous les iles de Karaibes venez découvrir des expériences nouvelles",
        price:230.5,
        imageUrl:"assets/images/cham1.jpg"
    },
    {
        hotelId:2,
        hotelName:"Borabora",
        description:"Découvrez une expérience unique sur ile de Borabora",
        price:530.5,
        imageUrl:"assets/images/cham2.jpg"
    },
    {
        hotelId:3,
        hotelName:"Tongama",
        description:"Le soleil au zenit de ile Tongana et sa plage aux milles étoiles n'attendent que vous",
        price:330.5,
        imageUrl:"assets/images/cham3.jpg"
    },
    {
        hotelId:4,
        hotelName:"Rome",
        description:"venez revivre l'histoire de Rome antique",
        price:430.5,
        imageUrl:"assets/images/cham4.jpg"
    },
    {
        hotelId:5,
        hotelName:"Pharaon",
        description:"Venez découvrir l'antiquité de l'égypte antique",
        price:590.5,
        imageUrl:"assets/images/cham5.jpg"
    },
    {
        hotelId:6,
        hotelName:"New Castel",
        description:"Découvrez une expérience royal aux prets des principautés Anglaisses",
        price:500.5,
        imageUrl:"assets/images/chamb.jpg"
    }
];

    public showBadge : Boolean | undefined;
    public hotelFilter = 'mot';
    public toggleIsNewBadge(): void{
        this.showBadge = !this.showBadge;
    }
}
