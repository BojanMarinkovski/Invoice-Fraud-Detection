package com.invoicefraud.models;

import com.invoicefraud.types.InvoiceType;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "INVOICE_TBL")
@Data
public class Invoice {

    @Id
    @Column(nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String debtorName ;

    @Column(nullable = false)
    private double sum;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private InvoiceType status;

}
