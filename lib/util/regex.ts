class RegexUtil {
    public emailCheck(email: string): boolean {
        const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        return emailRegex.test(email);
    }
}
export const regexUtil = new RegexUtil();
