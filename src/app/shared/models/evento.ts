import { Endereco } from './endereco';
export class Evento {
  id: string = "";
  nome : string = "";
  polo: string = "";
  endereco: Endereco = new Endereco();
  nomeLocal: string = "";
  imagem: string = "";
  data: string = "";
  categoria: string = "";
  horarioSaida: string = "";
  diaSemana: string = "";
  favoritos: boolean = false;
  descricao: string = "";
}
