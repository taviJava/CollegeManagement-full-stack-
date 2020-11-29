package com.sda.school.service;

import com.sda.school.persistance.dto.MateriaDto;
import com.sda.school.persistance.model.MateriaModel;
import com.sda.school.repository.MateriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MateriaService {
    @Autowired
    private MateriaRepository materiaRepository;

    public void save (MateriaDto materiaDto){
        MateriaModel materiaModel = new MateriaModel();
        materiaModel.setDescription(materiaDto.getDescription());
        materiaModel.setName(materiaDto.getName());
        materiaRepository.save(materiaModel);
    }

    public void update(MateriaDto materiaDto){
        Optional<MateriaModel> materiaModelOptional = materiaRepository.findById(materiaDto.getId());
        if (materiaModelOptional.isPresent()){
            MateriaModel materiaModel = materiaModelOptional.get();
            materiaModel.setName(materiaDto.getName());
            materiaModel.setDescription(materiaDto.getDescription());
            materiaRepository.save(materiaModel);
        }
    }
    public void delete(long id){
        materiaRepository.deleteById(id);
    }
    public List<MateriaDto> getAll(){
        List<MateriaModel> materiaModels = materiaRepository.findAll();
        List<MateriaDto> materiaDtos = new ArrayList<>();
        for (MateriaModel materiaModel: materiaModels){
            MateriaDto materiaDto = new MateriaDto();
            materiaDto.setId(materiaModel.getId());
            materiaDto.setDescription(materiaModel.getDescription());
            materiaDtos.add(materiaDto);
        }
        return materiaDtos;
    }

    public MateriaDto getOne(long id){
        Optional<MateriaModel> materiaModelOptional = materiaRepository.findById(id);
        MateriaDto materiaDto = new MateriaDto();
        if (materiaModelOptional.isPresent()){
            MateriaModel materiaModel = materiaModelOptional.get();
            materiaDto.setId(materiaModel.getId());
            materiaDto.setDescription(materiaModel.getDescription());
        }
        return materiaDto;
    }
}
