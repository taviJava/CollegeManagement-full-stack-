package com.sda.school.controller;

import com.sda.school.persistance.dto.EvidenceDto;
import com.sda.school.service.EvidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class EvidenceControler {
    @Autowired
    private EvidenceService evidenceService;
    @PreAuthorize("hasRole('PROFESSOR')")
    @GetMapping("/evidences/{dateId}")
    public List<EvidenceDto> getEvidences(@PathVariable(name = "dateId") long dateId){
        return evidenceService.getByDate(dateId);
    }
}
