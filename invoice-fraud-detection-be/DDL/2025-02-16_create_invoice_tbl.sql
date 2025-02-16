CREATE TABLE invoice_tbl
(
    id          INT AUTO_INCREMENT NOT NULL,
    debtor_name VARCHAR(255)       NOT NULL,
    sum         DOUBLE             NOT NULL,
    status      VARCHAR(255)       NOT NULL,
    CONSTRAINT pk_invoice_tbl PRIMARY KEY (id)
);