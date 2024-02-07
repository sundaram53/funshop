---------------------------------------------
SELECT * FROM FS_LOGIN_INFORMATION; --- admin_record
SELECT * FROM FS_LOGIN_INFORMATION where cust_id=42;

-----------------------------------------------
--select name,open_mode from v$database;
--select tname from tab;
--
--SELECT tablespace_name, bytes / 1024 / 1024 MB FROM dba_free_space WHERE tablespace_name = 'tbs_perm_fsdb_01'; --- tbs_perm_fsdb_01 -- 3.9375
--SELECT tablespace_name, file_name, bytes / 1024/ 1024  MB FROM dba_data_files;
--select username as schema_name from sys.all_users; -- SCHEMA_NAME SYS, FSADMIN
--select username as schema_name from sys.dba_users; -- SCHEMA_NAME SYS, FSADMIN
--select distinct owner from dba_objects; --  
--
--select sys_context( 'userenv', 'current_schema' ) from dual;
--select distinct owner from all_tables; 
--select * from all_tables where owner = 'FSADMIN'; 
--select distinct table_name from dba_tab_columns where owner = 'FSADMIN' and table_name like 'FS_%'; 
--select * from dba_tab_columns where owner = 'FSADMIN' and table_name like 'FS_LOGIN_INFORMATION';
-----------------------------------------------

