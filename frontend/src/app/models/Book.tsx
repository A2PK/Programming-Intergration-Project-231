export interface Book {
  isbn: string;
  name: string;
  genre: string;
  description: string;
  author: string;
  publisher: string;
  publishdate: Date;
  totalpages: Number;
  condition: boolean;
  availability: Number;
  location: string;
  image_url: string;
  startdate: Date;
  enddate: Date;
  extendeddate: Date;
}
