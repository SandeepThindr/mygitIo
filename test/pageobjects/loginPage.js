class LoginPage 
{
    get userName()
    {
        return $("#username")
    }
    get password()
    {
        return $("//input[@type='password']")
    }
    get alert()
    {
        return $(".alert-danger")
    }
    get textInfo()
    {
        return $("p")
    }
    get signIn()
    {
        return $("#signInBtn")
    }
    async Login(userName,password)
    {
        await this.userName.setValue("userName")
        await this.password.setValue("password")
        await this.signIn.click()
    }
}
module.exports = new LoginPage()