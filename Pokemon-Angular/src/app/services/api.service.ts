import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';

// VARs


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  // ATT
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

  // CON
  constructor(private http: HttpClient) { }


  // LC


  // FUN
  getPokemon(): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.apiUrl)
  }


} //<--END
