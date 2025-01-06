const loginPage = require('../pageobjects/loginPage')
const shopPage = require('../pageobjects/shop')
const reviewPage = require('../pageobjects/reviewPage')
const confirmPage = require('../pageobjects/confirm')
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testdata/loginTest.json'))
describe('Ecommerce Application', async()=>
    {
    
    credentials.forEach( ({username,password}) =>{
    it('Login Fail page', async()=>{
    
        //webdriver io
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await loginPage.Login(username,password)
        await browser.pause(6000)
        await console.log(await loginPage.alert.getText())
        //await browser.pause(3000)
        await browser.waitUntil(async()=>await loginPage.signIn.getAttribute('value')=== 'Sign In',
        {
            timeout:5000,
            timeoutMsg:'Error Message is not showing up'
        })
        await console.log (await loginPage.alert.getText())
        await expect(await loginPage.textInfo).toHaveText(expect.stringContaining("username is rahulshettyacademy and Password is learning"))
        
    })
})

    xit('End To End Test', async()=>{
            const products = ['Nokia Edge','Blackberry']
            //webdriver io
            await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
            await loginPage.Login("rahulshettyacademy","learning")
            await loginPage.Login.signIn
            await shopPage.checkout.waitForExist()
            //await expect(browser).toHaveTitle("ProtoCommerce")
            await shopPage.addProductstoCart(products)
            await shopPage.checkout.click()
            await browser.pause(4000)
            sumofProducts = await reviewPage.sumofProducts()
            totalIntValue = await reviewPage.totalFormattedPrice()
            await expectchai(sumofProducts).to.equal(totalIntValue)
            await confirmPage.success.click()
            await confirmPage.country.setValue("ind")
            await confirmPage.dissappear.waitForExist({reverse:true})
            await confirmPage.selectedCountry.click()
            await confirmPage.submit.click()
            await browser.pause(4000)
       
    
    
    
    
    })
    
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
    
    
    })