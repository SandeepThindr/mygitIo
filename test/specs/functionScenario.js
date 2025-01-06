//const expectchai = require('chai').expect

describe('Functional Testing on Application', async()=>
    {
    
    
    
    
    
    it('Scrolling and Mouse Hover', async()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        await browser.pause(4000)
        await $("#mousehover").moveTo()
        await browser.pause(4000)
        await $("=Top").click()
        await browser.pause(4000)
    })

    xit('Web Table Validation', async()=>{

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click()
        const veggiesLocators = await $$("tr td:nth-child(1)")
        const veggiesNames = await veggiesLocators.map(async veggie => await veggie.getText())
        console.log(veggiesNames)
        const sortedVeggies = await veggiesNames.sort()
        console.log(sortedVeggies)
        //expectchai(veggiesNames).to.equal(sortedVeggies)







    })
    
    it('Web Table Filter Validation', async()=>{

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("#search-field").setValue("Tomato")
        const veggiesLocators = await $$("tr td:nth-child(1)")
        await expect(veggiesLocators).toBeElementsArrayOfSize({eq:1})
        console.log(await veggiesLocators[0].getText())
        await expect(await veggiesLocators[0]).toHaveText("Tomato")
    })
})     

