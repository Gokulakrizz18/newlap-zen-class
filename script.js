async function foo(){
    var res = await fetch("https://restcountries.com/v3.1/all")
    var res1 = await res.json()
    console.log(res1)
}