export type TimeInvoice = {
    id: string;
    customer_id: string;
    time: number;
    date: string;
    description:string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' | 'done';
  };

  export type params = {
    projectId: string;
  }