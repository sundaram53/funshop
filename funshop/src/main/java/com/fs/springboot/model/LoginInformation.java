package com.fs.springboot.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//import java.util.*;
//import java.sql.*;
//---------------------------------------------
//drop table fs_login_information;
//
//create table fs_login_information (   
//    cust_id number(10) not null,
//	  phone_number number(10) not null,
//    email_id nvarchar2(120) null, 
//    login_password nvarchar2(12) not null,
//    login_old_password nvarchar2(12) null,    
//    dt_create timestamp default current_timestamp not null,
//    dt_update timestamp,
//    active_record varchar2(1) default 'y' not null,
//	constraint fs_login_information_pk primary key (phone_number)	
//) tablespace tbs_perm_fsdb_01;
//
//create sequence fs_login_information_sequence;
//
//create or replace trigger fs_login_information_on_insert
//  before insert on fs_login_information
//  for each row
//begin
//  select fs_login_information_sequence.nextval
//  into :new.cust_id
//  from dual;
//end;
//---------------------------------------------

@Entity
@Table(name = "fs_login_information")
public class LoginInformation {

	@Id
	private long custId;
	
	@Column(name = "phone_number")
	private long phoneNumber;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "login_password")
	private String loginPassword;

	@Column(name = "login_old_password")
	private String loginOldPassword;
	
	@Column(name = "dt_update")
	private Date dtUpdate;
	
	public LoginInformation() {
		
	}
	
	public LoginInformation(long custId, long phoneNumber, String emailId, String loginPassword,
			String loginOldPassword, Date dtUpdate) {
		super();
		this.custId = custId;
		this.phoneNumber = phoneNumber;
		this.emailId = emailId;
		this.loginPassword = loginPassword;
		this.loginOldPassword = loginOldPassword;
		this.dtUpdate = dtUpdate;
	}

	public long getCustId() {
		return custId;
	}

	public void setCustId(long custId) {
		this.custId = custId;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getLoginPassword() {
		return loginPassword;
	}

	public void setLoginPassword(String loginPassword) {
		this.loginPassword = loginPassword;
	}

	public String getLoginOldPassword() {
		return loginOldPassword;
	}

	public void setLoginOldPassword(String loginOldPassword) {
		this.loginOldPassword = loginOldPassword;
	}

	public Date getDtUpdate() {
		return dtUpdate;
	}

	public void setDtUpdate(Date dtUpdate) {
		this.dtUpdate = dtUpdate;
	}

	


	public static void sampleMethod()
	{
		try {
			java.util.Date date = new java.util.Date();
			long t = date.getTime();
			System.out.println("long t : " + date.getTime());
			java.sql.Date sqlDate = new java.sql.Date(t);
			java.sql.Time sqlTime = new java.sql.Time(t);
			java.sql.Timestamp sqlTimestamp = new java.sql.Timestamp(t);
			System.out.println("sqlDate from t : " + sqlDate.toString());
			System.out.println("sqlTime from t : " + sqlTime.toString());
			System.out.println("sqlTimestamp from t : " + sqlTimestamp.toString());
		}
		catch (Exception e) {
			e.printStackTrace();
			System.out.println("Failed to insert the record.");
		} 
		finally {
			System.out.println("finally.");
		}

	}

}
