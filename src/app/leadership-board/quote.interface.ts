export interface Quote {
    
    id: string;
    dateCreated: Date;
    premium: number;
    discountedPremium?: number;
    vendorKey: number;
    vendorName: string;
    // List<QuoteItemDTO> QuoteItems:;
    leadId: string;
    //  QuoteStatus Status:;
    acceptQuoteUrl?: string;
    redirectUrl: string;
    synopsis: string;
    logoUrl: string;
    apiKey: string;
    acceptedDate: Date;
    //  List<AcceptQuoteType> AcceptQuoteTypes:;
}