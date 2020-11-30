package com.sda.school.service;

import com.sda.school.persistance.dto.PrezentDto;
import com.sda.school.persistance.model.PrezentModel;
import com.sda.school.repository.PrezentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PrezentService {
    @Autowired
    private PrezentRepository prezentRepository;

    public void save(PrezentDto prezentDto){
        PrezentModel prezentModel = new PrezentModel();
        prezentModel.setPresent(prezentDto.isPresent());
        prezentRepository.save(prezentModel);
    }
    public void update(PrezentDto prezentDto){
        Optional<PrezentModel> prezentModelOptional = prezentRepository.findById(prezentDto.getId());
        if (prezentModelOptional.isPresent()){
            PrezentModel prezentModel = prezentModelOptional.get();
            prezentModel.setPresent(prezentDto.isPresent());
            prezentRepository.save(prezentModel);
        }
    }
    public void delete(long id){
        prezentRepository.deleteById(id);

    }
    public List<PrezentDto> getAll(){
        List<PrezentModel> prezentModels = prezentRepository.findAll();
        List<PrezentDto> prezentDtos = new ArrayList<>();
        for (PrezentModel prezentModel: prezentModels){
            PrezentDto prezentDto = new PrezentDto();
            prezentDto.setId(prezentModel.getId());
            prezentDto.setPresent(prezentModel.isPresent());
            prezentDtos.add(prezentDto);
        }
        return prezentDtos;
    }

    public PrezentDto getOne(long id){
        Optional<PrezentModel> prezentModelOptional = prezentRepository.findById(id);
        PrezentDto prezentDto = new PrezentDto();
        if (prezentModelOptional.isPresent()){
            PrezentModel prezentModel = prezentModelOptional.get();
            prezentDto.setId(prezentModel.getId());
            prezentDto.setPresent(prezentModel.isPresent());
        }
        return prezentDto;
    }
}
