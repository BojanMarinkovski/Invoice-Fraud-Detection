package com.invoicefraud.repositories;

import com.invoicefraud.models.Invoice;
import com.invoicefraud.types.InvoiceType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {

    @Query("select i.status from Invoice i where i.id = :id")
    Optional<InvoiceType> getStatusForInvoice(@Param("id") int id);

    @Modifying
    @Query("update Invoice i set i.status = null")
    void clearStatusesForAllInvoices();
}
