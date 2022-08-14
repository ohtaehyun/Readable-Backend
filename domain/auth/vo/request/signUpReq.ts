export default class SignUpReq {
    private email: String;
    private password: String;
    private name: String;

    constructor(req: {email:String, password:String, name:String}) {
        this.email = req.email;
        this.password = req.password;
        this.name = req.name;
        this.validate();
    }

    private validate() {
        //여기서 입력값 검증 regex 관련 모듈 필요 

    }

    public getAll() {
        return {
            email: this.email,
            password: this.password,
            name: this.name
        };
    }
}