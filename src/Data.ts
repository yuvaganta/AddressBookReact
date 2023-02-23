import { IContact } from "./Models";
import {Guid} from "guid-typescript";
export let contactList : IContact[];
contactList=[{id:Guid.create().toString(),name:"Chandermani Arora",email:"chandermani@technovert.com",mobile:"+91 9292929292",landline:"040 30 1231211",website:"http://www.technovert.com",address:"Madhapur, Hyderabad"},
 {id:Guid.create().toString(),name:"Sashi Pagadala",email:"sashi@technovert.com",mobile:"+91 9292929292",landline:"040 30 1231211",website:"http://www.technovert.com",address:"Madhapur, Hyderabad"},
  {id:Guid.create().toString(),name:"Praveen Battula",email:"praveen@technovert.com",mobile:"+91 9292929292",landline:"040 30 1231211",website:"http://www.technovert.com",address:"Madhapur, Hyderabad"},
 {id:Guid.create().toString(),name:"Vijay Yalamanchili",email:"vijay@technovert.com",mobile:"+91 9292929292",landline:"040 30 1231211",website:"http://www.technovert.com",address:"Madhapur, Hyderabad"}];