import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FileUploadService {
  apiUrl = "http://localhost:3000/admain";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBjYmEwNmIwOWNiODI3OGMxNGFiYWYiLCJpYXQiOjE1Nzc4OTIzNTl9.Wa9CZ25d8jggluv07pxD6X0F7MLaYyV635uzUG0IvFo"
    })
  };
  constructor(private http: HttpClient) {}

  upload(formData) {
    return this.http.post<any>(`${this.apiUrl}`, formData, {
      reportProgress: true,
      observe: "events"
    });
  }
}
