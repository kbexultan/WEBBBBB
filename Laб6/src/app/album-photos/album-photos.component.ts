import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumPhotosService } from './album-photos.service';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgOptimizedImage, NgForOf, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  data: any[] | undefined;

  constructor(private route: ActivatedRoute, private albumPhotosService: AlbumPhotosService) {}

  ngOnInit(): void {
    const albumId = this.route.snapshot.params['id'];
    this.albumPhotosService.getPhotos(albumId).subscribe((data) => {
      this.data = data;
    });
  }
}
