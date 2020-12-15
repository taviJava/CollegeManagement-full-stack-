package com.sda.school.service;

import com.sda.school.persistance.dto.DateDto;
import com.sda.school.persistance.dto.EvidenceDto;
import com.sda.school.persistance.dto.MateriaDto;
import com.sda.school.persistance.dto.StudentDto;
import com.sda.school.persistance.model.*;
import com.sda.school.repository.EvidenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class EvidenceService {
    @Autowired
    private EvidenceRepository evidenceRepository;

    public void createEvidences(GroupModel groupModel, DateModel dateModel){
        List<EvidenceModel> evidenceModels = new ArrayList<>();
        for (StudentModel studentModel: groupModel.getStudentModelList()){
            EvidenceModel evidenceModel = new EvidenceModel();
            evidenceModel.setDate(dateModel);
            evidenceModel.setMateria(dateModel.getMateria());
            evidenceModel.setPrezent(Prezent.valueOf("unspecified"));
            evidenceModel.setStudent(studentModel);
            evidenceModels.add(evidenceModel);
        }
        dateModel.setEvidences(evidenceModels);
    }

    public List<EvidenceDto> getByDate(long id){
        List<EvidenceDto> evidenceDtoList = new ArrayList<>();
        List<EvidenceModel> evidenceModels = evidenceRepository.findAllByDate_Id(id);
        for (EvidenceModel evidenceModel: evidenceModels){
            EvidenceDto evidenceDto = new EvidenceDto();
            evidenceDto.setId(evidenceModel.getId());
            DateDto dateDto = new DateDto();
            dateDto.setDate(evidenceModel.getDate().getDate());
            dateDto.setStartTime(evidenceModel.getDate().getStartTime());
            dateDto.setEndTime(evidenceModel.getDate().getEndTime());
            evidenceDto.setDate(dateDto);
            MateriaDto materiaDto = new MateriaDto();
            materiaDto.setName(evidenceModel.getMateria().getName());
            evidenceDto.setMateria(materiaDto);
            evidenceDto.setPrezent(evidenceModel.getPrezent().name());
            StudentDto studentDto = new StudentDto();
            studentDto.setFirstName(evidenceModel.getStudent().getFirstName());
            studentDto.setLastName(evidenceModel.getStudent().getLastName());
            evidenceDto.setStudent(studentDto);
            evidenceDtoList.add(evidenceDto);
        }
        return evidenceDtoList;
    }

    public void saveEvidence(String prezent, long id){
        Optional<EvidenceModel> evidenceModelOptional = evidenceRepository.findById(id);
        if (evidenceModelOptional.isPresent()){
            EvidenceModel evidenceModel = evidenceModelOptional.get();
            evidenceModel.setPrezent(Prezent.valueOf(prezent));
        }
     }
}
