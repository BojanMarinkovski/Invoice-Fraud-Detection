package com.invoicefraud.controllers;

import com.invoicefraud.models.Invoice;
import com.invoicefraud.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("invoice")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @GetMapping("all")
    public List<Invoice> getInvoices() {
        return invoiceService.findAll();
    }
}
