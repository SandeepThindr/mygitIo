describe('Ecommerce Application', async()=>
{


xit('Login Fail page', async()=>{

    //webdriver io
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await browser.getTitle())
    await browser.pause(3000)
    await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"))
    await browser.pause(3000)
    await $("#username").setValue("rahulshettyacademy")
    await browser.pause(3000)
    await $("input[name='username']").setValue("secondcss")
    await browser.pause(3000)
    const password = $("//input[@type='text']")
    await password.setValue("learning")
    await $("#signInBtn").click()
    //await browser.pause(3000)
    await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value')=== 'Sign In',
    {
        timeout:5000,
        timeoutMsg:'Error Message is not showing up'
    })
    await console.log (await $(".alert-danger").getText())
    await expect($("p")).toHaveText(expect.stringContaining("username is rahulshettyacademy and Password is learning"))
    






})


it('Login Suceesfully to Page Title', async()=>{

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $("#username").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    await password.setValue("learning")
    await $("#signInBtn").click()
    await $(".btn-primary").waitForExist()
    await expect(browser).toHaveUrl(expect.stringContaining("shop"))
    await expect(browser).toHaveTitle("ProtoCommerce")




})

















    


})