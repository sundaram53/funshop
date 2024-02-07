---------------------------------------------
DROP TABLE FS_LOGIN_INFORMATION;

CREATE TABLE FS_LOGIN_INFORMATION (   
    CUST_ID NUMBER(10) NOT NULL,
	PHONE_NUMBER NUMBER(10) NOT NULL,
    EMAIL_ID NVARCHAR2(120) NULL, 
    LOGIN_PASSWORD NVARCHAR2(12) NOT NULL,
    LOGIN_OLD_PASSWORD NVARCHAR2(12) NULL,    
    DT_CREATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    DT_UPDATE TIMESTAMP,
    ADMIN_RECORD VARCHAR2(1) DEFAULT 'Y' NOT NULL,
	CONSTRAINT FS_LOGIN_INFORMATION_PK PRIMARY KEY (PHONE_NUMBER)	
) TABLESPACE tbs_perm_fsdb_01;

CREATE SEQUENCE fs_login_information_sequence;

CREATE OR REPLACE TRIGGER fs_login_information_on_insert
  BEFORE INSERT ON fs_login_information
  FOR EACH ROW
BEGIN
  SELECT fs_login_information_sequence.nextval
  INTO :new.cust_id
  FROM dual;
END;

---------------------------------------------
SELECT * FROM FS_LOGIN_INFORMATION;
--INSERT INTO FS_LOGIN_INFORMATION (PHONE_NUMBER, EMAIL_ID, LOGIN_PASSWORD, DT_UPDATE) 
--VALUES (9994846567,'sbaskaran230485@gmail.com','appa496', CURRENT_TIMESTAMP);
--INSERT INTO FS_LOGIN_INFORMATION (PHONE_NUMBER, EMAIL_ID, LOGIN_PASSWORD, DT_UPDATE) 
--VALUES (9962827541,'sundar.israel@gmail.com','sundar53', CURRENT_TIMESTAMP);
--UPDATE fs_login_information SET LOGIN_OLD_PASSWORD = 'china23' WHERE cust_id = 2;
-------------------------------------------------------
--commit;




--select * from dba_objects where owner = 'FSADMIN';
--select name,open_mode from v$database;
--select tname from tab;
--
--SELECT tablespace_name, bytes / 1024 / 1024 MB FROM dba_free_space WHERE tablespace_name = 'tbs_perm_fsdb_01'; --- tbs_perm_fsdb_01 -- 3.9375
--SELECT tablespace_name, file_name, bytes / 1024/ 1024  MB FROM dba_data_files;
--select username as schema_name from sys.all_users; -- SCHEMA_NAME SYS, FSADMIN
--select username as schema_name from sys.dba_users; -- SCHEMA_NAME SYS, FSADMIN
--select distinct owner from dba_objects where owner = 'FSADMIN'; --  
--select * from dba_objects where owner = 'FSADMIN';
--
--select sys_context( 'userenv', 'current_schema' ) from dual;
--select distinct owner from all_tables; 
--select * from all_tables where owner = 'FSADMIN'; 
--select distinct table_name from dba_tab_columns where owner = 'FSADMIN' and table_name like 'FS_%'; 
--select * from dba_tab_columns where owner = 'FSADMIN' and table_name like 'FS_LOGIN_INFORMATION';
-----------------------------------------------
