export class LoginInformation {
    custId!: number;
	phoneNumber!: number;
	emailId!: string;
	loginPassword!: string;
	loginOldPassword!: string;
	dtUpdate!: Date;    
}

/*
create table fs_login_information (   
    cust_id number(10) not null,
	phone_number number(10) not null,
    email_id nvarchar2(120) null, 
    login_password nvarchar2(12) not null,
    login_old_password nvarchar2(12) null,    
    dt_create timestamp default current_timestamp not null,
    dt_update timestamp,
    active_record varchar2(1) default 'y' not null,
	constraint fs_login_information_pk primary key (phone_number)	
) tablespace tbs_perm_fsdb_01;	
*/