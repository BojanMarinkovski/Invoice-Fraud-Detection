package com.invoicefraud.types;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;

@Getter
public enum InvoiceType {

    OK("OK"),
    SUSPICIOUS("Suspicious");

    @JsonValue
    private final String description;

    InvoiceType(String description) {
        this.description = description;
    }

}
