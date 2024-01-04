export interface Book {
  id: string;
  isbn: string;
  name: string;
  genre: string;
  description: string;
  author: string;
  publisher: string;
  publishdate: Date;
  totalpages: number;
  condition: boolean;
  availability: number;
  location: string;
  image_url: string;
  startdate: Date;
  enddate: Date;
  extendeddate: Date;
}
// availiblity enum (0,1,2,3) 0:available 1:unavailable 2:reserved 3:borrowed
