//const expectchai = require('chai').expect

describe('UI Controls Test Suite', async()=>
    {
    
    
    
    
    
    xit('Ui Controls', async()=>{
    
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("#username").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        //What if your locator you are looking have multiple elements use $$
        /*const radioButton = await $$(".radiotextsty")
        const userButton = radioButton[1]
        await userButton.click()
        await browser.pause(5000)*/
        // second way
        const radioButton = await $$(".customradio")
        const userButton = radioButton[1]
        await userButton.$("span").click()
        const modal = await $(".modal-body")
        await modal.waitForDisplayed()
        await $("#cancelBtn").click()
        // to check whether admin selected or not
        console.log(await $$(".customradio")[0].$("span").isDisplayed())
        // to click on ok button
        await userButton.$("span").click()
        await modal.waitForDisplayed()
        await $("#okayBtn").click()
       // await browser.pause(4000)
        //validate pop up not shown up when you click admin
        await $$(".customradio")[0].$("span").click()
        //await browser.pause(4000)
        await expect(modal).not.toBeDisplayed()
        const dropdown = await $("select.form-control")
        await dropdown.selectByAttribute('value','teach')
        await browser.pause(4000)
        await dropdown.selectByVisibleText("Consultant")
        await browser.pause(4000)
        await dropdown.selectByIndex(0)
        await browser.pause(4000)
        console.log(await dropdown.getValue())
        expectchai(await dropdown.getValue()).to.equal("stud")
        
    
    
    
    
    })
    
    xit('Dynamic Dropdown Control', async()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("Can")
        await browser.pause(4000)
        let items = $$("[class='ui-menu-item'] div")
        for (var i= 0; i< await items.length; i++)
        {
            //console.log( await items[i].getText())
            if(( await items[i].getText())=="Dominican Republic")
            {
                await items[i].click()
                await browser.pause(4000)
            }
        }
    })


    
        it('Checkbox Identification', async()=>{
            await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
           let checkbox = await $$("input[type='checkbox']")
           await checkbox[1].click()
           await browser.pause(4000)
           console.log(await checkbox[2].isSelected())
           //await browser.saveScreenshot("screenshot.png")
           await browser.pause(4000)

            
        
        
    
    
    
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
    
    
    })