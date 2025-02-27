import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';


  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get<any[]>(this.apiUrl);
  }


}
