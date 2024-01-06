import { ObjectId } from "mongodb";

export interface User {
  id: ObjectId;
  phonenum: string;
  age: number;
  gender: string;
  ssn: string;
  name: string;
  flag: Number;
  countfine: Number;
  username: string;
  reservinglist: UserActivity[];
  borrowinglist: UserActivity[];
  borrowedlist: UserActivity[];
}

export interface UserActivity {
  bookId: ObjectId;
  bookName: string;
  startDate: Date;
  endDate: Date;
  extendedDate: Date;
  location: string;
}
