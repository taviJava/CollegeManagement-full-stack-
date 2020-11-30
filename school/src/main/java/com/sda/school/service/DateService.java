package com.sda.school.service;

import com.sda.school.persistance.dto.DateDto;
import com.sda.school.persistance.model.DateModel;
import com.sda.school.repository.DateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.IllegalFormatCodePointException;
import java.util.List;
import java.util.Optional;

@Service
public class DateService {
    @Autowired
    private DateRepository dateRepository;

    public void save(DateDto dateDto){
        DateModel dateModel = new DateModel();
        dateModel.setDate(dateDto.getDate());
        dateModel.setStartTime(dateDto.getStartTime());
        dateModel.setEndTime(dateDto.getEndTime());
        dateRepository.save(dateModel);
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
