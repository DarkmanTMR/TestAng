interface IAuthor{
  id: number;
  name: string;
  surname: string;
}


export interface IBook{
  id: number;
  title: string;
  price: number;
  authors: IAuthor[]
}
