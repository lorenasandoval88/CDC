const hello = `hello at ${Date()}`
let openData={}

openData.cdc = async()=>{ 
    let url = `https://data.ny.gov/resource/5kgr-h5g5.json`
    console.log(url)
    try{
    let d = await (await fetch(url)).json()
        return d
    } catch (err){
        console.log(`${url}`,err)
        return undefined
    } 
}

// ---------------------------------------------------------------------------
openData.socrata = async()=>{ 
    //Detailed Mortality 1999-2013 (D76)
    let url = `https://wonder.cdc.gov/controller/datarequest/D76`
    console.log(url)
    try{
    let d = await (await fetch(url)).json()
        return d
    } catch (err){
        console.log(`${url}`,err)
        return undefined
    } 
}


// ---------------------------------------------------------------------------

export { // these are the methods of epiVerseTracker
    hello,
    openData,

}
