import {Classroom} from '../../classrooms/model/classroom';
import {Group} from '../../groups/model/group';
import {Profesor} from '../../profesors/model/profesor';
import {Materia} from '../../materies/model/materia';

export class DateJavaModel {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  classroomModel: Classroom;
  groupModel: Group;
  profesorModel: Profesor;
  materia: Materia;
}
