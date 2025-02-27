import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumPhotosService {
  constructor(private http: HttpClient) {}

  getPhotos(albumId: string) {
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    return this.http.get<any[]>(url);
  }
}
