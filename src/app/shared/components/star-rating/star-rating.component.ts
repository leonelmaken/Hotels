import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector:'app-star-rating',
    templateUrl :'./star-rating.component.html',
    styleUrls:['./star-rating.component.css']
})

export class StarRatingComponent implements OnChanges{
[x: string]: any;

    public starWitdh: number = 0;

    @Input()

    public rating : number = 2;

    @Output()

    public starRatingCliked:EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(){
        this.starWitdh = this.rating * 125 / 5;
    }

    public sendRating() : void{
        this.starRatingCliked.emit(`la note est de ${this.rating}`)
    }

}
