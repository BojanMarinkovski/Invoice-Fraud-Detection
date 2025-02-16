package com.invoicefraud.services;

import com.invoicefraud.models.Invoice;
import com.invoicefraud.repositories.InvoiceRepository;
import com.invoicefraud.types.InvoiceType;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    public List<Invoice> findAll() {
        return invoiceRepository.findAll();
    }

    public InvoiceType getStatusForInvoice(int id) {
        Optional<InvoiceType> statusForInvoiceOpt = invoiceRepository.getStatusForInvoice(id);
        if (statusForInvoiceOpt.isPresent()) {
            return statusForInvoiceOpt.get();
        } else {
            int round = (int) Math.round(Math.random());
            InvoiceType invoiceType = round == 1 ? InvoiceType.OK : InvoiceType.SUSPICIOUS;
            invoiceRepository.findById(id).ifPresent(invoice -> {
                invoice.setStatus(invoiceType);
                invoiceRepository.save(invoice);
            });
            return invoiceType;
        }
    }

    @Transactional
    public void clearStatusesForAllInvoices() {
        invoiceRepository.clearStatusesForAllInvoices();
    }
}
