import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelListComponent } from '../hotel-list.component';
import { IHotel } from '../hotel';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit{

    public hotel: IHotel = <IHotel>{};

    constructor(
        private route: ActivatedRoute,

        private hotelService : HotelListComponent
    ){}

    ngOnInit(): void {
        const id: number = +this.route.snapshot.paramMap.getAll('id');
        this.hotelService
        console.log('id : ', id);
    }

}
