INSERT INTO invoice_fraud_detection.invoice_tbl (debtor_name, sum, status)
VALUES
    ('Oliver Jake', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Noah James', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'SUSPICIOUS'),
    ('Jack Connor', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Liam John', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Harry Callum', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'SUSPICIOUS'),
    ('Mason Robert', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'SUSPICIOUS'),
    ('Jacob Jacob', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Jacob Michael', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Charlie Kyle', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Thomas Joe', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'SUSPICIOUS'),
    ('Ethan David', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('George Reece', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Michael Richard', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Oscar Rhys', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Alexander Joseph', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('James Charlie', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('James Charles', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'SUSPICIOUS'),
    ('William Damian', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Daniel Thomas', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Amelia Margaret', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Emma Mary', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Olivia Samantha', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Olivia Patricia', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Isla Bethany', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Sophia Jennifer', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Emily Elizabeth', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Isabella Elizabeth', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'SUSPICIOUS'),
    ('Poppy Joanne', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Ava Linda', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Ava Megan', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Mia Barbara', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Isabella Victoria', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Emily Susan', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Jessica Lauren', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Abigail Margaret', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'SUSPICIOUS'),
    ('Lily Michelle', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Madison Jessica', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Sophie Tracy', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK'),
    ('Charlotte Sarah', FLOOR(RAND() * (40000 - 520 + 1)) + 520, 'OK');



SET SQL_SAFE_UPDATES = 0;

UPDATE invoice_tbl
SET status = NULL
WHERE TRUE;

SET SQL_SAFE_UPDATES = 1;