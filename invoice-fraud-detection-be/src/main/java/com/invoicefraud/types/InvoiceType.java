package com.invoicefraud.types;

import lombok.Getter;

@Getter
public enum InvoiceType {

    OK("OK"),
    SUSPICIOUS("Suspicious");

    private final String description;

    InvoiceType(String description) {
        this.description = description;
    }

}
