import {DateJavaModel} from './date-java-model';
import {Student} from '../../students/model/student';
import {Materia} from '../../materies/model/materia';

export class Evidence {
  id: number;
  date: DateJavaModel;
  student: Student;
  materia: Materia;
  prezent: string;
}
