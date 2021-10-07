-- CREATE USER {name} [ [ WITH ] option [ ... ] ]
--  options
--      UPERUSER | NOSUPERUSER      : Superuser 여부. 기본값은 NOSUPERUSER이다.
--      CREATEDB | NOCREATEDB       : DB생성 권한 부여 여부. 기본값은 권한 없음 이다.
--      CREATEUSER | NOCREATEUSER   : User생성 권한 부여 여부. 기본값은 권한 없음 이다.
--      PASSWORD 'password'			: Password 설정
CREATE USER nope WITH PASSWORD 'nope123';

-- DB내 사용자 조회
-- SELECT * FROM PG_USER;
-- 사용자 목록 및 권한 조회
-- \du


-- linux 명령어
-- mkdir /home/postgres/tbs_nope
-- chown postgres.postgres /home/postgres
-- chmod 777 /home/postgres

-- CREATE TABLESPACE tablespace_name [ OWNER { new_owner | CURRENT_USER | SESSION_USER } ] LOCATION 'directory' [ WITH ( tablespace_option = value [, ... ] ) ]
-- 디렉토리가 존재하지 않거나 권한이 없으면 오류 발생
CREATE TABLESPACE tbs_nope LOCATION '/home/postgres/tbs_nope';


-- CREATE DATABASE {name} [ [ WITH ] [ OWNER [=] user_name ]
-- 	option
--		OWNER		: DB owner. Owner 외에 다른 계정은 역할 제한이 있다.
--		TEMPLATE	: DB Template에 의해 생성될 때 Template 이름이다. 기본값은 template1이다.
--		ENCODING	: Data Encoding 방법. 값을 지정할 때 LC_CTYPE, LC_COLLATE value와 연계되기 때문에 주의해야 한다.
--		LC_COLLATE	: String Data를 기준으로 정렬할 때 정렬 기준.
--					예를 들면 ko_KR.UTF-8은 기본적으로 한글 기준으로 정렬하되, 한글 외의 문자는 UTF-8에 의해 정렬하라는 의미다.
--					본 시스템 설치 시 ko_KR.UTF-8이 기본값으로 설정되어 있다. (template1의 기본값)
--		LC_CTYPE	: 대, 소문자, 숫자 등과 같은 문자 분류를 위한 설정.
--		TABLESPACE	: Table Space를 임의로 설정할 때 사용.
--		ALLOW_CONNECTIONS : 외부에서 접속 가능 여부 설정
--		CONNECTION LIMIT : DB 접속 제한 설정.
--		IS_TEMPLATE	: DB Template 인지 여부 설정
CREATE DATABASE db_nope
WITH
	OWNER nope
	TABLESPACE tbs_nope;