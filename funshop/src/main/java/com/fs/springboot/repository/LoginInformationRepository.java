package com.fs.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fs.springboot.model.LoginInformation;

@Repository
public interface LoginInformationRepository extends JpaRepository<LoginInformation, Long> {

}
