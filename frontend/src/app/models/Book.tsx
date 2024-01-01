export interface Book {
  isbn: string;
  name: string;
  condition: boolean;
  availability: boolean;
  location: string;
  borrowdate: Date;
  returndate: Date;
  image_url: string;
}
