//Split array on chanks
const chanking =(arr,chankSize)=>{

 const    result =[]
  for (let i =0; i< arr.length; i +=chankSize){
   result.push(arr.slice(i, i+chankSize))


  }
  return result
}
console.log(chanking([1,2,3,4,5,6,7,8],2));

