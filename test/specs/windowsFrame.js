describe('Window and Frames Miscellaneous', async()=>
    {
    
        
    
    it('Parent and Child Window', async()=>{


        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.pause(4000)
        await $("a[href='https://rahulshettyacademy.com/documents-request']").click()
        await browser.pause(4000)
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect(browser).toHaveUrl(expect.stringContaining("documents-request"))
        await browser.closeWindow()
        // to come back to parent window
        await browser.switchToWindow(handles[0])
        await $("#username").setValue("rahulshettyacademy")
        await browser.pause(4000)
        

    })
})