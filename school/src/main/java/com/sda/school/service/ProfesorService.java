package com.sda.school.service;

import com.sda.school.persistance.dto.MateriaDto;
import com.sda.school.persistance.dto.PersonDto;
import com.sda.school.persistance.dto.ProfesorDto;
import com.sda.school.persistance.model.MateriaModel;
import com.sda.school.persistance.model.PersonModel;
import com.sda.school.persistance.model.ProfesorModel;
import com.sda.school.persistance.model.Role;
import com.sda.school.repository.ProfesorRepository;
import com.sda.school.security.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProfesorService extends UserDetailService {
    @Autowired
    private ProfesorRepository profesorRepository;


    public void save(ProfesorDto profesorDto){
        ProfesorModel profesorModel = new ProfesorModel();
        profesorModel.setName(profesorDto.getName());
        profesorModel.setPhoneNumber(profesorDto.getPhoneNumber());
        profesorModel.setEmail(profesorDto.getEmail());
        profesorModel.setPassword("profesor");
        profesorModel.setRole(Role.valueOf("Professor"));
        profesorRepository.save(profesorModel);
    }
    public void update(ProfesorDto profesorDto){
        Optional<ProfesorModel> profesorModelOptional = profesorRepository.findById(profesorDto.getId());
        if (profesorModelOptional.isPresent()){
            ProfesorModel profesorModel = profesorModelOptional.get();
            profesorModel.setName(profesorDto.getName());
            profesorModel.setPhoneNumber(profesorModel.getPhoneNumber());
            profesorModel.setEmail(profesorDto.getEmail());
            profesorModel.setPassword(profesorDto.getPassword());
            List<MateriaModel> materiaModels = new ArrayList<>();
            for (MateriaDto materiaDto: profesorDto.getMateriaModelList()){
                MateriaModel materiaModel = new MateriaModel();
                materiaModel.setId(materiaDto.getId());
                materiaModel.setName(materiaDto.getName());
                materiaModel.setDescription(materiaDto.getDescription());
                materiaModels.add(materiaModel);
            }
            profesorModel.setMateriaModelList(materiaModels);
            profesorRepository.save(profesorModel);
        }
    }

    public void delete(long id){
        profesorRepository.deleteById(id);
    }

    public List<ProfesorDto> getAll(){
        List<ProfesorModel> profesorModels = profesorRepository.findAll();
        List<ProfesorDto> profesorDtos = new ArrayList<>();
        for (ProfesorModel profesorModel: profesorModels){
            ProfesorDto profesorDto = new ProfesorDto();
            profesorDto.setId(profesorModel.getId());
            profesorDto.setEmail(profesorModel.getEmail());
            profesorDto.setPassword(profesorModel.getPassword());
            profesorDto.setName(profesorModel.getName());
            profesorDto.setPhoneNumber(profesorModel.getPhoneNumber());
            List<MateriaDto> materiaDtos = new ArrayList<>();
            for (MateriaModel materiaModel: profesorModel.getMateriaModelList()){
                MateriaDto materiaDto = new MateriaDto();
                materiaDto.setId(materiaModel.getId());
                materiaDto.setName(materiaModel.getName());
                materiaDtos.add(materiaDto);

            }
            profesorDto.setMateriaModelList(materiaDtos);
            profesorDtos.add(profesorDto);
        }
        return profesorDtos;
    }

    public ProfesorDto getOne(long id){
        Optional<ProfesorModel> profesorModelOptional = profesorRepository.findById(id);
        ProfesorDto profesorDto = new ProfesorDto();
        if (profesorModelOptional.isPresent()){
            ProfesorModel profesorModel = profesorModelOptional.get();
            profesorDto.setId(profesorModel.getId());
            profesorDto.setEmail(profesorModel.getEmail());
            profesorDto.setPassword(profesorModel.getPassword());
            profesorDto.setName(profesorModel.getName());
            profesorDto.setPhoneNumber(profesorModel.getPhoneNumber());
            List<MateriaDto> materiaDtos = new ArrayList<>();
            for (MateriaModel materiaModel: profesorModel.getMateriaModelList()){
                MateriaDto materiaDto = new MateriaDto();
                materiaDto.setId(materiaModel.getId());
                materiaDto.setName(materiaModel.getName());
                materiaDtos.add(materiaDto);

            }
            profesorDto.setMateriaModelList(materiaDtos);
        }
        return profesorDto;
    }
}
