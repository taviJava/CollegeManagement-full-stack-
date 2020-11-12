import {Materia} from '../../materies/model/materia';
import {DateJavaModel} from '../../dates/model/date-java-model';

export class Profesor {
  id: number;
  name: string;
  phoneNumber: string;
  materiaModelList: Materia[];
}
