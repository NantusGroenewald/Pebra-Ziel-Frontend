import {ItemInterface} from './item.interface';

export interface Quote {
    id: string;
    dateCreated: Date;
    premium: number;
    discountedPremium?: number;
    vendor: number;
    vendorName: string;
    quoteItems: ItemInterface[];
    leadId: string;
    acceptQuoteUrl?: string;
    redirectUrl: string;
    synopsis: string;
    logoUrl: string;
    apiKey: string;
    acceptedDate: Date;
    acceptQuoteTypes: any[];
    status: number;
}
