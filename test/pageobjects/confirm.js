class Confirm
{
    get success()
    {
        return $(".btn-success")
    }
    get country()
    {
        return $("#country")
    }
    get dissappear()
    {
        $(".lds-ellipsis")
    }
    get selectedCountry()
    {
        $("=India")
    }
    get submit()
    {
        $("input[type='submit']")
    }
 
}
module.exports = new Confirm()