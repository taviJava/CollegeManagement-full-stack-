package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.model.DateModel;
import com.sda.school.model.MessageModel;
import com.sda.school.repository.DateRepository;
import com.sda.school.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class DateController {
    @Autowired
    private DateRepository dateRepository;
    @Autowired
    private MessageRepository messageRepository;
    @GetMapping("/date")
    public List<DateModel> getDataModelList() {
        return dateRepository.findAll();
    }
    @GetMapping("/message")
    public MessageModel getMessageModel(){
        if (messageRepository.findAll().size()>0) {
            MessageModel messageModel = messageRepository.findAll().get(0);
            return messageModel;
        }
       return new MessageModel();
    }
    @PostMapping("/date")
    public void addDate(@RequestBody DateModel dateModel) {
        dateRepository.save(dateModel);
        String message =  "Data a fost adaugata cu succes";
        addMessage(message);
    }

    private void addMessage(String message){
        List<MessageModel> messageModels = messageRepository.findAll();
        MessageModel messageModel;
        if (messageModels.size()>0){
            messageModel = messageModels.get(0);
        }else {
            messageModel = new MessageModel();
        }
        messageModel.setMessage(message);
        messageRepository.save(messageModel);
    }
    @DeleteMapping("/date/{id}")
    public void deleteDate(@PathVariable(name = "id") Long id) {
        dateRepository.deleteById(id);
    }
    @PutMapping("/date")
    public void updateDate(@RequestBody DateModel dateModel) {
        dateRepository.save(dateModel);
    }
}
