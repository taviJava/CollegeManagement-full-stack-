package com.sda.school.service;

import com.sda.school.persistance.dto.ClassRoomDto;
import com.sda.school.persistance.dto.DateDto;
import com.sda.school.persistance.dto.GroupDto;
import com.sda.school.persistance.dto.ProfesorDto;
import com.sda.school.persistance.model.*;
import com.sda.school.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DateService {
    @Autowired
    private DateRepository dateRepository;
    @Autowired
    private ProfesorRepository profesorRepository;
    @Autowired
    private ClassroomRepository classroomRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private EvidenceService evidenceService;
    @Autowired
    private MateriaRepository materiaRepository;

    public String save(DateDto dateDto, long profId, long groupId, long classId, long matId){
        DateModel dateModel = new DateModel();
        dateModel.setDate(dateDto.getDate());
        dateModel.setStartTime(dateDto.getStartTime());
        dateModel.setEndTime(dateDto.getEndTime());
        Optional<ProfesorModel> profesorModelOptional = profesorRepository.findById(profId);
        if (profesorModelOptional.isPresent()){
            ProfesorModel profesorModel = profesorModelOptional.get();
            dateModel.setProfesorModel(profesorModel);
        }
        Optional<MateriaModel>  materiaModelOptional = materiaRepository.findById(matId);
        if (materiaModelOptional.isPresent()){
            MateriaModel materiaModel = materiaModelOptional.get();
            dateModel.setMateria(materiaModel);
        }
        Optional<GroupModel> groupModelOptional = groupRepository.findById(groupId);
        if (groupModelOptional.isPresent()){
            GroupModel groupModel = groupModelOptional.get();
            dateModel.setGroupModel(groupModel);
            evidenceService.createEvidences(groupModel,dateModel);
        }
        Optional<ClassroomModel> classroomModelOptional = classroomRepository.findById(classId);
        if (classroomModelOptional.isPresent()){
            ClassroomModel classroomModel = classroomModelOptional.get();
            dateModel.setClassroomModel(classroomModel);
        }
        if (!verifyDatesByProfesor(profId,dateModel)){
            if (!verifyDatesByClass(classId,dateModel)){
                if (!verifyDatesByGroup(groupId,dateModel)){
                    dateRepository.save(dateModel);
                    return "the course has been saved successfully";
                }else{
                    return "the course could not be added because this group has another course in the same time slot";
                }
            }else{
                return "the course could not be added because this class has another course in the same time slot";
            }
        }else {
            return "the course could not be added because this professor has another course in the same time slot";
        }
        }
    private boolean ifIsOccupated(DateModel dateModelOld, DateModel dateModel){
        if (dateModel.getDate().toLocalDate().equals(dateModelOld.getDate().toLocalDate())){
            if (dateModel.getStartTime().equals(dateModelOld.getStartTime())||
                    dateModel.getStartTime().before(dateModelOld.getStartTime())&&dateModel.getEndTime().after(dateModelOld.getStartTime())||
                    dateModel.getStartTime().after(dateModelOld.getStartTime())&&dateModel.getStartTime().before(dateModelOld.getEndTime())||
                    dateModel.getStartTime().before(dateModelOld.getStartTime())&&dateModel.getEndTime().equals(dateModelOld.getEndTime())){
                return true;

            }
        }
        return false;
    }
    private boolean verifyDatesByProfesor(long id, DateModel dateModel){
        List<DateModel> dateModels = dateRepository.findAllByProfesorModel_Id(id);
        for (DateModel dateModelOld: dateModels){
            if (ifIsOccupated(dateModelOld,dateModel)){
                return true;
            }
        }
        return false;
    }
    private boolean verifyDatesByGroup(long id, DateModel dateModel){
        List<DateModel> dateModels = dateRepository.findAllByGroupModel_Id(id);
        for (DateModel dateModelOld: dateModels){
            if (ifIsOccupated(dateModelOld,dateModel)){
                return true;
            }
        }
        return false;
    }
    private boolean verifyDatesByClass(long id, DateModel dateModel){
        List<DateModel> dateModels = dateRepository.findAllByClassroomModel_Id(id);
        for (DateModel dateModelOld: dateModels){
            if (ifIsOccupated(dateModelOld,dateModel)){
                return true;
            }
        }
        return false;
    }
    public void update(DateDto dateDto){
        Optional<DateModel> dateModelOptional = dateRepository.findById(dateDto.getId());
        if (dateModelOptional.isPresent()){
            DateModel dateModel = dateModelOptional.get();
            dateModel.setDate(dateDto.getDate());
            dateModel.setStartTime(dateDto.getStartTime());
            dateModel.setEndTime(dateDto.getEndTime());
            dateRepository.save(dateModel);
        }
    }
    public void delete(long id){
        dateRepository.deleteById(id);
    }
    public List<DateDto> getAll(){
        List<DateModel> dateModels = dateRepository.findAll();
        List<DateDto> dateDtos = new ArrayList<>();
        for (DateModel dateModel: dateModels){
            DateDto dateDto = new DateDto();
            dateDto.setDate(dateModel.getDate());
            dateDto.setStartTime(dateModel.getStartTime());
            dateDto.setEndTime(dateModel.getEndTime());
            ProfesorDto profesorDto = new ProfesorDto();
            profesorDto.setName(dateModel.getProfesorModel().getName());
            dateDto.setProfesorModel(profesorDto);
            GroupDto groupDto = new GroupDto();
            groupDto.setName(dateModel.getGroupModel().getName());
            groupDto.setId(dateModel.getGroupModel().getId());
            dateDto.setGroupModel(groupDto);
            ClassRoomDto classRoomDto = new ClassRoomDto();
            classRoomDto.setName(dateModel.getClassroomModel().getName());
            dateDto.setClassroomModel(classRoomDto);
            dateDtos.add(dateDto);
        }
        return dateDtos;
    }

    public DateDto getOne(long id){
        Optional<DateModel> dateModelOptional = dateRepository.findById(id);
        DateDto dateDto = new DateDto();
        if (dateModelOptional.isPresent()){
            DateModel dateModel = dateModelOptional.get();
            dateDto.setDate(dateModel.getDate());
            dateDto.setStartTime(dateModel.getStartTime());
            dateDto.setEndTime(dateModel.getEndTime());
        }
        return dateDto;
    }

    public List<DateDto> getDatesByProfessor(long idProf){
        List<DateModel> dateModels = dateRepository.findAllByProfesorModel_Id(idProf);
        List<DateDto> dateDtos = new ArrayList<>();
        for (DateModel dateModel: dateModels){
            DateDto dateDto = new DateDto();
            dateDto.setId(dateModel.getId());
            dateDto.setDate(dateModel.getDate());
            dateDto.setStartTime(dateModel.getStartTime());
            dateDto.setEndTime(dateModel.getEndTime());
            ProfesorDto profesorDto = new ProfesorDto();
            profesorDto.setName(dateModel.getProfesorModel().getName());
            dateDto.setProfesorModel(profesorDto);
            GroupDto groupDto = new GroupDto();
            groupDto.setName(dateModel.getGroupModel().getName());
            groupDto.setId(dateModel.getGroupModel().getId());
            dateDto.setGroupModel(groupDto);
            ClassRoomDto classRoomDto = new ClassRoomDto();
            classRoomDto.setName(dateModel.getClassroomModel().getName());
            dateDto.setClassroomModel(classRoomDto);
            dateDtos.add(dateDto);
        }
        return dateDtos;
    }
}
