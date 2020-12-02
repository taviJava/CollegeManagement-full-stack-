package com.sda.school.service;

import com.sda.school.persistance.dto.DateDto;
import com.sda.school.persistance.model.DateModel;
import com.sda.school.repository.DateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DateService {
    @Autowired
    private DateRepository dateRepository;

    public String save(DateDto dateDto, long profId, long groupId, long classId){
        DateModel dateModel = new DateModel();
        dateModel.setDate(dateDto.getDate());
        dateModel.setStartTime(dateDto.getStartTime());
        dateModel.setEndTime(dateDto.getEndTime());
        if (verifyDatesByProfesor(profId,dateModel)){
            if (verifyDatesByClass(classId,dateModel)){
                if (verifyDatesByGroup(groupId,dateModel)){
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
        if (dateModel.getDate().equals(dateModelOld.getDate())){
            if (dateModel.getStartTime().equals(dateModelOld.getStartTime())||
                    dateModel.getStartTime().before(dateModelOld.getStartTime())&&dateModel.getEndTime().after(dateModelOld.getStartTime())||
                    dateModel.getStartTime().after(dateModelOld.getStartTime())&&dateModel.getStartTime().before(dateModelOld.getEndTime())||
                    dateModel.getStartTime().before(dateModelOld.getStartTime())&&dateModel.getEndTime().equals(dateModelOld.getEndTime())){
                return false;
            }
        }
        return true;
    }
    private boolean verifyDatesByProfesor(long id, DateModel dateModel){
        List<DateModel> dateModels = dateRepository.findAllByProfesorModel(id);
        for (DateModel dateModelOld: dateModels){
            if (ifIsOccupated(dateModelOld,dateModel)){
                return true;
            }
        }
        return false;
    }
    private boolean verifyDatesByGroup(long id, DateModel dateModel){
        List<DateModel> dateModels = dateRepository.findAllByGroupModel(id);
        for (DateModel dateModelOld: dateModels){
            if (ifIsOccupated(dateModelOld,dateModel)){
                return true;
            }
        }
        return false;
    }
    private boolean verifyDatesByClass(long id, DateModel dateModel){
        List<DateModel> dateModels = dateRepository.findAllByClassroomModel(id);
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
}
