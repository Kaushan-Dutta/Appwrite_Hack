import { Client, Account, ID, Databases } from 'appwrite';


const client = new Client()
client.setEndpoint('https://cloud.appwrite.io/v1').setProject(Project_Id); //project id
export const account = new Account(client);
//Databases

export const databases = new Databases(client);//database id
