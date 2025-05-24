function fibonacciGenerator (n) 
{
    var output = [];
    if (n === 0)
    {
        return output;
    }
    else if(n === 1)
    {
        output.push(0);
    }
    else if(n === 2){
        output.push(0,1);
        
    }
    else
    {
        output = [0,1];
        for (var i = 2; i<n;i++)
        {
            output.push(output[i-1] + output[i-2]);
        }
    }
    
    return output;
}
var output = fibonacciGenerator(20);
console.log(output);
