export interface OrderEmailParams {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  order_id: string;
  order_items: string;
  total_cost: string;
  recipient_name: string;
  iban: string;
  bic: string;
}

export interface IEmailService {
  sendOrderEmailsAsync(params: OrderEmailParams): Promise<void>;
}
