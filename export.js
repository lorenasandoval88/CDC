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

async function seer(){ 
}

// -------------- IARC (https://www.iarc.who.int/cancer-topics) --------------
let iarc={}
iarc.causes=['obesity','infections','uv','alcohol']
iarc.causesBy=['countries','cancers','attributable','regions','preventable']
iarc.causesGet= async (cause=iarc.causes[0],by=iarc.causesBy[0])=>{
    let url = `https://gco.iarc.fr/causes/${cause}/data/${by}.json`
    console.log(url)
    try{
        let d = await (await fetch(url)).json()
        return d
    } catch (err){
        console.log(`${url}`,err)
        return undefined
    } 
}
iarc.causesGetAll= async function(cache=false){  // retrieve all causal data
    let dt={}
    iarc.causes.forEach(async c=>{
        dt[c]={}
        iarc.causesBy.forEach(async b=>{
            let url = `https://gco.iarc.fr/causes/${c}/data/${b}.json`
            console.log(url)
            try{
                dt[c][b] = await (await fetch(url)).json()
            } catch (err){
                console.log(`${url}`, err)
            }
            
        })
    })
    if(cache){
        iarc.causesGetAll=dt //replaces original function with fetched results, i.e. caching them
    }
    return dt
}
// ---------------------------------------------------------------------------

export { // these are the methods of epiVerseTracker
    hello,
    cdc,
    seer,
    iarc
}
