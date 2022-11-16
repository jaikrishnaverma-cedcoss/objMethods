let ul=document.getElementById('ul')
let FoodObj=[{name:"Raita",shop:"maharaja"},{name:"Samosa",shop:"maharaja"},{name:"Poori",shop:"maharaja"}]
let Employee={empId:1,empName:"Ravi"}
function populate(ul,arr=FoodObj){
    document.getElementById('ul').innerHTML=""
 let data=arr.map(x=>{
    document.getElementById(ul).innerHTML+='<li>{name:"'+x.name+'"}</li>'})
}
function populateKeys(ul,arr=FoodObj){
    document.getElementById('ul').innerHTML=""
 let data=arr.map(x=>{
    document.getElementById(ul).innerHTML+='<li>{name:"'+x.name+'"}</li>'})
}
populate('ul')
function addObj(event){
  FoodObj=[...FoodObj,{name:event.obj.value}]
  event.reset()
  populate('ul')
}
function showKey(){
    document.getElementById("ul2").innerHTML=""
    document.getElementById("ul3").innerHTML=""
    FoodObj.map(x=>{
        for (const key of Object.keys(x)) {
            document.getElementById("ul2").innerHTML+='<li>key:"'+key+'"</li>'
            document.getElementById("ul3").innerHTML+='<li>value:"'+x[key]+'"</li>'
        }
    })
console.log(data)

}
function UpdateFail(){
    Object.freeze(Employee)
    console.log("befoire Update Perform",Employee,"Now Change the name of employee to 'Dev'")
    Employee.empName="Dev"
    console.log("After Update Perform",Employee)
}
let emp={}
function Submitted(event){
   emp= {position:event.position.value,type:event.type.value,isAvailable:event.isAvailable.checked}
   
   document.getElementById('table').innerHTML='<tr><th>POSITION</th><th>TYPE</th><th>ACCEPTING ORDER</th></tr><tr><td>'+emp.position+'</td><td>'+emp.type+'</td><td>'+emp.isAvailable+'</td></tr>'
   }

   let data=[]
   data['name']='ram kumar'
   data['add']='gomti'
function arrayConverter(){
    let keys=Object.keys(emp)
    let values=Object.values(emp)
    let arr=keys.map((x,i)=>[keys[i],values[i]])
    console.log("Paired array",arr)
    document.getElementById('data').innerText='Check in console'
}
