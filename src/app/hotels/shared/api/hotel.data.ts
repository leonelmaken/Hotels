import {InMemoryDbService} from 'angular-in-memory-web-api'
import { IHotel } from '../models/hotel';

export class HotelData implements InMemoryDbService{
    createDb(): Record<string, IHotel[]>{
        const hotels : IHotel[] = [
            {
        Id: 1,
        hotelName:"Karaibe ",
        description:"Sous les iles de Karaibes venez découvrir des expériences nouvelles",
        price:230.5,
        imageUrl:"assets/images/cham1.jpg",
        rating: 2
    },
    {
        Id:2,
        hotelName:"Borabora",
        description:"Découvrez une expérience unique sur ile de Borabora",
        price:530.5,
        imageUrl:"assets/images/cham2.jpg",
        rating : 5
    },
    {
        Id:3,
        hotelName:"Tongama",
        description:"Le soleil au zenit de ile Tongana et sa plage aux milles étoiles n'attendent que vous",
        price:330.5,
        imageUrl:"assets/images/cham3.jpg",
        rating : 5
    },
    {
        Id:4,
        hotelName:"Rome",
        description:"venez revivre l'histoire de Rome antique",
        price:430.5,
        imageUrl:"assets/images/cham4.jpg",
        rating : 4
    },
    {
        Id:5,
        hotelName:"Pharaon",
        description:"Venez découvrir l'antiquité de l'égypte antique",
        price:590.5,
        imageUrl:"assets/images/cham5.jpg",
        rating : 3
    },
    {
        Id:6,
        hotelName:"New Castel",
        description:"Découvrez une expérience royal aux prets des principautés Anglaisses",
        price:500.5,
        imageUrl:"assets/images/chamb.jpg",
        rating : 5
    }
        ];
        return {hotels};
    }

}
