import { Endereco } from './../models/endereco';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class EventoService {




  constructor(private http: HttpClient) { }

  buscarEventosPorCidade(cidade: string) {
    return this.http.get(API +'evento?cidade=' + cidade)
 }

 buscarPorId(id: string): Observable<Evento> {
  const url = API + '/eventos/find/byId/' + id;
  return this.http.get<Evento>(url);
}

 listarTudo(): Observable<Evento[]> {
  return this.http.get<Evento[]>(API + '/eventos/find/all');
}



listarCategoria(categoria: string): Observable<Evento[]> {
  return this.http.get<Evento[]>(API + '/eventos/find/byCategory/' + categoria)
}

listarDiaCidade(dia: number, cidade: string): Observable<Evento[]> {
  return this.http.get<Evento[]>(API + '/eventos/find/cityDay/?dia=' + dia + '&cidade=' + cidade)
}

listarDiaInt(dia: number): Observable<Evento[]> {
  return this.http.get<Evento[]>(API + '/eventos/find/intDay/' + dia);
}

salvarFavorito(evento: Evento): Observable<Evento> {
  const url = API + '/eventos/update/' + evento.id;
  return this.http.put<Evento>(url, evento);
}

}
