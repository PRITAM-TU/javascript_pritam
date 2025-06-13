const array=["javascript","c++","python","java"]
const array1=[45,78,558,2552,445,1,2,3,0,4,7,8]
array.forEach((item) => {
    console.log(item);   
});
const newarray=array1.filter((item)=> item>4)
console.log(newarray);
