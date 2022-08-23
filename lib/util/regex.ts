class RegexUtil {
    private emailRegex;
    private passwordRegex;

    constructor() {
        this.emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        this.passwordRegex = new RegExp(/^\w{8,20}/)
    }

    public isValidEmail(email: string): boolean {
        return this.emailRegex.test(email);
    }

    public isValidPassword(password: string): boolean {
        return this.passwordRegex.test(password);
    }
}
export const regexUtil = new RegexUtil();
