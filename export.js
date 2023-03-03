const hello = `hello at ${Date()}`
let cdc={}
cdc.data = async()=>{ 
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

export { // these are the methods of epiVerseTracker
    hello,
    cdc,

}
