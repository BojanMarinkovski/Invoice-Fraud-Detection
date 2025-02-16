package com.invoicefraud.controllers;

import com.invoicefraud.models.Invoice;
import com.invoicefraud.services.InvoiceService;
import com.invoicefraud.types.InvoiceType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("invoice")
@CrossOrigin(origins = "http://localhost:3000/")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @GetMapping("all")
    public List<Invoice> getAllInvoices() {
        return invoiceService.findAll();
    }

    @GetMapping("get-status/{id}")
    public InvoiceType getStatusForInvoice(@PathVariable int id) {
        return invoiceService.getStatusForInvoice(id);
    }

    @GetMapping("clear-status-for-all-invoices")
    public void clearStatusesForAllInvoices() {
        invoiceService.clearStatusesForAllInvoices();
    }

}
