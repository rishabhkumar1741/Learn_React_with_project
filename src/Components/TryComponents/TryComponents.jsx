export default function TryComponents()
{
    const date  = new Date();
    const time = date.getHours();
    let greet;
    if(time<12)
    {
        greet = "morinng"
    }
    else if(time>=12 && time<=17)
    {
        greet = "evening"
    }
    else{
        greet = "night"
    }
    return<>
    {greet}
    </>
}