//const expectchai = require('chai').expect
describe('Ecommerce Application', async()=>
    {
    
    
    it('End To End Test', async()=>{
        const products = ['Nokia Edge','Blackberry']
        //webdriver io
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#signInBtn").click()
        const link = await $("*=Checkout")
        link.waitForExist()
        await expect(browser).toHaveTitle("ProtoCommerce")
        let cards = await $$("div[class='card h-100']")
        
        for (let i =0; i< await cards.length; i++)
        {
            const card = await cards[i].$("div h4 a")
            console.log(await card.getText())
            if(products.includes(await card.getText()))
            {
                await cards[i].$(".card-footer button").click()
                
            }
            
        }
        await link.click()
        await browser.pause(4000)
        const productPrices = await $$("//tr/td[4]/strong")
        /*const sumofProducts= await Promise.all (await productPrices.map(async (productPrice)=> parseInt(( await productPrice.getText()).split(".")[1].trim())))
        .reduce((acc,price)=>acc+price,0)
        console.log(sumofProducts)
        const totalValue = await $("h3 strong").getText()
        const totalIntValue = parseInt(totalValue.split(".")[1].trim())
        await expectchai(sumofProducts).to.equal(totalIntValue)*/
        await $(".btn-success").click()
        await $("#country").setValue("ind")
        await $(".lds-ellipsis").waitForExist({reverse:true})
        await $("=India").click()
        await $("input[type='submit']").click()
        await browser.pause(4000)
    })


})