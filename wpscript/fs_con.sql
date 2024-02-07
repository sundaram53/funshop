select name,open_mode from v$database;
select tname from tab;

-- D:\oracle\oradata\ORCL123
CREATE BIGFILE TABLESPACE tbs_perm_fsdb_01 DATAFILE 'D:\oracle\oradata\ORCL123\tbs_perm_fsdb_01.dbf' SIZE 50M AUTOEXTEND ON; 
CREATE TEMPORARY TABLESPACE tbs_temp_fsdb_01 TEMPFILE 'D:\oracle\oradata\ORCL123\tbs_temp_fsdb_01.dbf' SIZE 20M AUTOEXTEND ON; 
alter session set "_ORACLE_SCRIPT"=true;  
-----
CREATE USER fsadmin IDENTIFIED BY fsadmin12 DEFAULT TABLESPACE tbs_perm_fsdb_01 TEMPORARY TABLESPACE tbs_temp_fsdb_01 QUOTA 20M on tbs_perm_fsdb_01; 
--TABLESPACE TBS_PERM_FSDB_01 created.
--TABLESPACE TBS_TEMP_FSDB_01 created.
--User FSADMIN created.

GRANT create session TO fsadmin;
GRANT create table TO fsadmin;
GRANT create view TO fsadmin;
GRANT create any trigger TO fsadmin;
GRANT create any procedure TO fsadmin;
GRANT create sequence TO fsadmin;
GRANT create synonym TO fsadmin;

GRANT DROP any trigger TO fsadmin;
GRANT DROP any procedure TO fsadmin;

GRANT ALTER session TO fsadmin;
GRANT ALTER any trigger TO fsadmin;
GRANT ALTER any procedure TO fsadmin;

GRANT DBA TO fsadmin WITH ADMIN OPTION;
GRANT DBA TO fsadmin;

---------------------------------------
----****************************************************
select username as schema_name from sys.all_users; -- SCHEMA_NAME SYS, FSADMIN
select username as schema_name from sys.dba_users; -- SCHEMA_NAME SYS, FSADMIN
select distinct owner from dba_objects; --  
----  below 24 owner listed... without FSADMIN -- but after creating one table under FSADMIN user, it become 25 with 'FSADMIN'.
------------------------------------------
select * from dual;
select sys_context( 'userenv', 'current_schema' ) from dual;
---------------------------------------------
SELECT tablespace_name, bytes / 1024 / 1024 MB FROM dba_free_space WHERE tablespace_name = 'tbs_perm_fsdb_01'; --- tbs_perm_fsdb_01 -- 3.9375
SELECT tablespace_name, file_name, bytes / 1024/ 1024  MB FROM dba_data_files;
----------------------------------------



select * from all_tables where owner = 'FSADMIN'; 
select distinct table_name from dba_tab_columns where owner = 'FSADMIN' and table_name like 'FS_%'; 
select * from dba_tab_columns where owner = 'FSADMIN' and table_name like 'FS_LOGIN_INFORMATION';

select distinct owner from all_tables; --  
select * from all_tables where owner = 'FSADMIN' and table_name like 'FS_%'; 
----------------------------------------

