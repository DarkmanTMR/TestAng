interface IBook{
  id: number;
  title: string;
  price?: number;
}


export interface IAuthor{
  id: number;
  name: string;
  surname: string;
  books: IBook[];
  }
