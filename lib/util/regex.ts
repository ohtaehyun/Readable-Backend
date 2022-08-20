class RegexUtil {
    public isValidEmail(email: string): boolean {
        const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
        return emailRegex.test(email);
    }

    public isValidPassword(password: string): boolean {
        const passwordRegex = new RegExp(/^\w{8,20}/);
        return passwordRegex.test(password);
    }
}
export const regexUtil = new RegexUtil();
