import {Profesor} from '../../profesors/model/profesor';

export class Materia {
  id: number;
  name: string;
  description: string;
  professorModelList: Profesor[];
}
