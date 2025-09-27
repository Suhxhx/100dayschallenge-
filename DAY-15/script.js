// DAY-15
// PROBLEM
// "Detect Suspicious Browsing Pattern"
// k = 3
// 📤 Output: true
// Explanation: The window ["about", "products", "home"] has all unique entries.
function WindowTech(arr,k){
    for(let i=0;i<=arr.length-k;i++){
        let unique=[];
        for(let j=i;j<i+k;j++){
            if(unique.includes(arr[j])){
                break;
            }else{
                unique.push(arr[j]);
            }
        }
        if(unique.length===k){
            return true;
        }
    }
    return false;
}
console.log(WindowTech(["home", "about", "products", "home", "cart", "checkout"],3))