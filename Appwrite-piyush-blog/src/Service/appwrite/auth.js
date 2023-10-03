import conf from '../../conf/conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            // .setKey('ba5d04b6ae25e180d7ab8f0022c47d8825862c5345f645452586c880da73c5fbfd0cf3ab57c12244b158720cee3576b84cc9eee6f4749d942c7976ef975e43bf76c2d2d33a44679019ed5ac8984c0854ba9f2b4e1de01c35ec94064ed01c9825d9d01bdd90d50267238e36fa8e5c31ccdf71c5d40f8a7192dc58d3e2dccd906a')
            // .addScope('account.read')
            // .addScope('account.write');
        this.account = new Account(this.client);

            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method becoz if registered then automatically login
                return this.login({email, password});
            } else {
               return  userAccount;
            console.log("Appwrite service :: createAccount :: error", error);

            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
            console.log("Appwrite service :: login :: error", error);

        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

