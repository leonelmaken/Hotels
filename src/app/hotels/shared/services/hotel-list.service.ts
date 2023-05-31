import { Injectable } from "@angular/core";
import { IHotel } from "../models/hotel";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError,of } from "rxjs";
import { catchError,map,tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})

export class HotelListService{

    private readonly HOTEL_API_URL = 'api/hotels';

    constructor(private http:HttpClient){

    }

    public getHotels(): Observable<IHotel[]>{

        return  this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
            tap(hotels => console.log('hotels : ',hotels)),
            catchError(this.handleError)
        );
    }

    public getHotelById(id:number): Observable<IHotel>{
        if (id == 0) {
          // TODO document why this block is empty
           return of(this.getDefaultHotel());
        }
        return this.getHotels().pipe(
            map((hotels: any[]) => hotels.find((hotel: { hotelId: number; }) => hotel.hotelId == id))
        );
    }

    public updteHotel(hotel: IHotel): Observable<IHotel>{
        const url = `${this.HOTEL_API_URL}/${hotel.Id}`

        return this.http.put<IHotel>(url,hotel).pipe(
          catchError(this.handleError)
        );
    }

    private getDefaultHotel(): IHotel{
        return {
            Id : 0,
            hotelName: '',
            description : '',
            price : 0,
            rating : 0,
            imageUrl : ''
        };
    }

    private handleError(error : HttpErrorResponse){
        if (error.error instanceof ErrorEvent) {
            console.error('An error occured:',error.error.message);
        }else{
            console.error(
                `Backend retruned code ${error.status} ,` +
                `Body was : ${error.error}`
            );
        }
        return throwError(() => Error (
            'Something bad happened; please try aigain later'));
    }

}
