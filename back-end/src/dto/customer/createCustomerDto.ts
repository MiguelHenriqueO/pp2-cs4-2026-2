export interface CreateCustomerDto {
  name: string;
  ident_document: string;
  birth_date?: string | Date | null;
  street_name: string;
  house_number: string;
  complements?: string | null;
  district: string;
  municipality: string;
  state: string;  
  phone: string;
  email: string;
}
