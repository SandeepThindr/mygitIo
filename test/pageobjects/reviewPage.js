class ReviewPage
{
    get productPrices()
    {
        return $$("//tr/td[4]/strong")
    }
    get totalPrice()
    {
        return $("h3 strong")
    }
 async sumofProducts()
 {
    const sumofProducts= await Promise.all (await this.productPrices.map(async (productPrice)=> parseInt(( await productPrice.getText()).split(".")[1].trim())))
    .reduce((acc,price)=>acc+price,0)
 }
 async totalFormattedPrice()
 {
    const totalValue = await this.totalPrice.getText()
    const totalIntValue = parseInt(totalValue.split(".")[1].trim())
 }
  
}
module.exports = new ReviewPage()