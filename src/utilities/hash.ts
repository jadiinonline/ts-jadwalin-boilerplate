import CryptoJS, {} from "crypto-js"
import { envConfig } from "../config/environment";

export interface IAuthHelper{
    generateHash(str :string, salt :string) : string
    compareHash(hash :string, to_be_compared :string, salt: string) : boolean
}

class PasswordHelper implements IAuthHelper {
    generateHash(str: string): string{
        return CryptoJS.SHA1(str).toString();
    }
    compareHash(str: string, salt: string, hash_to_compare: string): boolean {
        let saltedHash = this.generateSaltedHash(str, salt);
        return hash_to_compare === saltedHash;
    }
    generateSaltedHash(str: string, salt: string, keySize: number = 32, iterations: number = 130): string {
        return CryptoJS.PBKDF2(str, salt, {
            keySize: keySize,
            iterations : iterations
          }).toString();
    }
    generateSalt(nBytes: number = 32): string {
        return CryptoJS.lib.WordArray.random(nBytes).toString();
    }
}

class EncryptionHelper{
    private encryptKey = String(envConfig.KEY_SECRET)
    encrypt(str: string): string{
        return CryptoJS.AES.encrypt(str, this.encryptKey).toString();
    }
    decrypt(encrypted: string): string{
        return CryptoJS.AES.decrypt(encrypted, this.encryptKey).toString(CryptoJS.enc.Utf8);
    }
}

export const encHelper = new EncryptionHelper();
export const passwordHelper = new PasswordHelper();
