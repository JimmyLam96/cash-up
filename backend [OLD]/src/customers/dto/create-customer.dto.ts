export class CreateCustomerDto {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber: number;
  readonly address: string;
  readonly houseNumber: [number, string];
  readonly postal: [number, string];
  readonly orders: string[];
}
