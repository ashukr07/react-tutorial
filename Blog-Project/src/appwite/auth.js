import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";
export class AuthService {
    client = new Client();
    account; //pehle client setup uske baad account setup hoga
    //hame chahiye jab koi call kare tab hi banaye nhi toh wastage of resource hoga
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);    
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
            return  userAccount;
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    
    async login ({email,password}){
        try {
            return await this.account.createEmailPasswordSession({email,password})
        }
        catch(error){
            console.log(error.message);
        }

    }

    async getCurrentUser(){
        try{
            const res= await this.account.get();
            console.log(res);
            if(res)return res;
        }
        catch(error){
            console.log(error.message)
        }
        //agar account mila hi nhi
        return null;
    }

    async logout (){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            console.log(error.message);
        }
    }
}

const authService = new AuthService();
//agar yeh authService object ke badle class bhejta toh bahar method use krne ke liye 

export default authService

//generalised code for authentication using appwrite
