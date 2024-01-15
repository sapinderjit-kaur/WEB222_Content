function sum()
{
    const parameters=arguments.length;
    let total=0;

    for(let i=0;i<parameters;i++)
    {
        total=total+arguments[i];
    }
    return total;
}

console.log(sum(1,2));