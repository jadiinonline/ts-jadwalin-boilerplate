
export class CustomException implements Error{
    name: string;
    message: string;
    stack?: string | undefined;
    errorCode?: number

    constructor(name:string,message:string,errorCode : number){
        this.message = message
        this.name = name
        this.errorCode = errorCode
    }

}