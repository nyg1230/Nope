CREATE TABLE IF NOT EXISTS REQUEST_CERTIFY (
    SEQ     		INT PRIMARY KEY,
    REQUEST_EMAIL   VARCHAR NOT NULL,
    RESPONSE_CODE   VARCHAR NOT NULL,
    REQUEST_DATE    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	EXPIRE_DATE		TIMESTAMP DEFAULT CURRENT_TIMESTAMP + INTERVAL '3 MINUTES',
    IS_EXPIRE       VARCHAR DEFAULT 'N' CHECK (IS_EXPIRE IN ('Y', 'N'))
)
