import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from '../shared/models/hotel';
import { HotelListService } from '../shared/services/hotel-list.service';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit{

    public hotel: IHotel | undefined= <IHotel>{};


    constructor(
        private route: ActivatedRoute,

        private hotelService : HotelListService,
        private router: Router
    ){}

    ngOnInit(): void {
        const id: number = +this.route.snapshot.paramMap.getAll('id');
        this.hotelService.getHotels().subscribe((hotels:IHotel[])=>{
              this.hotel = hotels.find(hotel => hotel.Id == id);
              console.log('hotel : ', this.hotel);
        });

    }

    public BackToList(): void{
       this.router.navigate(['/hotels']);
    }
}
