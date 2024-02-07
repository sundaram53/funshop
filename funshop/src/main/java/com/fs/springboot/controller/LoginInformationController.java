package com.fs.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fs.springboot.exception.ResourceNotFoundException;
import com.fs.springboot.model.LoginInformation;
import com.fs.springboot.repository.LoginInformationRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
public class LoginInformationController {
	
	@Autowired
	private LoginInformationRepository loginInformationRepository;
	
	//get all loginInformation
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/loginInformation")
	public List<LoginInformation> getAllLoginInformation() {
		return loginInformationRepository.findAll();
	}
	
	//create loginInformation rest application programming interface
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/loginInformation")
	public LoginInformation createLoginInformation(@RequestBody LoginInformation logininformation) {
		return loginInformationRepository.save(logininformation);
	}
	
	//get loginInformation by custId rest application programming interface
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/loginInformation/{custId}")
	public ResponseEntity<LoginInformation> getLoginInformationByCustId(@PathVariable Long custId) {
		LoginInformation logininformation = loginInformationRepository.findById(custId)
				.orElseThrow(() -> new ResourceNotFoundException("Login Info not exist with id : " + custId));
		return ResponseEntity.ok(logininformation);
				
	}
	
	//update loginInformation by custId rest application programming interface
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/loginInformation/{custId}")
	public ResponseEntity<LoginInformation> updateLoginInformationByCustId(@PathVariable Long custId, @RequestBody LoginInformation loginInfoDetails) {
		LoginInformation logininformation = loginInformationRepository.findById(custId)
				.orElseThrow(() -> new ResourceNotFoundException("Login Info not exist with id : " + custId));
		
		logininformation.setPhoneNumber(loginInfoDetails.getPhoneNumber());
		logininformation.setEmailId(loginInfoDetails.getEmailId());
		logininformation.setLoginPassword(loginInfoDetails.getLoginPassword());
		logininformation.setLoginOldPassword(loginInfoDetails.getLoginOldPassword());
		java.sql.Timestamp sqlTimestamp = new java.sql.Timestamp(new java.util.Date().getTime());
		logininformation.setDtUpdate(sqlTimestamp);
		
		LoginInformation updatedLoginInformation = loginInformationRepository.save(logininformation);
		
		return ResponseEntity.ok(updatedLoginInformation);
	}
	
	//delete loginInformation by custId rest application programming interface
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/loginInformation/{custId}")
	public ResponseEntity<LoginInformation> deleteLoginInformationByCustId(@PathVariable Long custId) {
		LoginInformation logininformation = loginInformationRepository.findById(custId)
				.orElseThrow(() -> new ResourceNotFoundException("Login Info not exist with id : " + custId));
		
		loginInformationRepository.delete(logininformation);
		
		return ResponseEntity.ok(logininformation);
	}

}
