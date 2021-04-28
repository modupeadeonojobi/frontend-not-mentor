import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  randomPhoto: string;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhotos()
      .subscribe(photo => {
        this.randomPhoto = photo.urls.regular;
      })
  }

}
