import { Endereco } from './endereco';
export class Evento {
  id: any;
  name: string = "";
  polo: string = "";
  endereco: Endereco = new Endereco();
  nomeLocal: string = "";
  img: string = "";
  data: string = "";
  horarioSaida: string = "";
  diaSemana: string = "";
  favoritos: boolean = false;
}
