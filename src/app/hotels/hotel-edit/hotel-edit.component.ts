import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelListService } from '../shared/services/hotel-list.service';
import { IHotel } from '../shared/models/hotel';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit{

    public hotelForm!: FormGroup;
    public hotel!: IHotel;
    public pageTitle!: string;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private hotelService : HotelListService
    ){}

    ngOnInit(): void {
      // TODO document why this method 'ngOnInit' is empty

        this.hotelForm = this.fb.group({
            hotelName : ['',Validators.required],
            hotelPrice : ['',Validators.required],
            starRating : [''],
            description : ['']
        });
        this.route.paramMap.subscribe(params => {
            const id = +params.getAll('id');
            this.getSelectedHotel(id);
        });
    }
    public getSelectedHotel(id : number): void{
      // TODO document why this method 'getSelectedHotel' is empty
       this.hotelService.getHotelById(id).subscribe((hotel: IHotel) =>{
        this.displayHotel(hotel);
       });
    }

    public displayHotel(hotel : IHotel):
      // TODO document why this method 'displayHotel' is empty
     void{

       this.hotel = hotel;
       if (this.hotel.Id == 0) {
         this.pageTitle = 'Créer un hotel';
       }else{
        this.pageTitle = `Modifier l\'hotel ${this.hotel.hotelName}`;
       }

       this.hotelForm.patchValue({
          hotelName : this.hotel.hotelName,
          hotelPrice : this.hotel.price,
          starRating : this.hotel.rating,
          description : this.hotel.description
       });
    }

    public saveHotel(): void{
      // TODO document why this method 'saveHotel' is empty
       console.log(this.hotelForm.value);
    }

}
