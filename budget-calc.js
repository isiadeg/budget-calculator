const budgetCategories = {
    holiday: "3",
    food: "",
    utilities: "",
    housing: "19",
    entertainment: "3",
    transportation: "10",
    academic_tuition: "6",
    insurance: "3",
    medical:"5",
    savings: "26"

}

// Utilitties and Food make up 25% of the budget but 
// each of the two is varied by both the gender and age of the individual
// the two categories for age are adult and non adult
// while the two categories for gender are male and female

function calculateFoodAndUtilities(gender, age){
     age = parseInt(age);

    let isAdult = ()=>{
        if(age >= 18){
            return true;
        }else{
            return false;
        }
    }

    if(isAdult() && gender === "female"){
        budgetCategories.food = "9";
        budgetCategories.utilities = "16";
    }
    else if(!isAdult() && gender === "female"){
        budgetCategories.food = "11";
        budgetCategories.utilities = "14";
    }
    else if(isAdult() && gender === "male"){
        budgetCategories.food= "19";
        budgetCategories.utilities = "6";
    }
    else{
        budgetCategories.food = "17"
        budgetCategories.utilities = "8"
    }


}
// With Each Dependents, Seven of the Categories Increase by 1% and 
//Savings  Decrease by 8% until savings is 2%; 

function increaseWithDependents(numberOfDependents){
    let noOfDep = parseInt(numberOfDependents);
    let savings = parseInt(budgetCategories.savings);
    
    for(let i = noOfDep; savings<2 || noOfDep > 0; noOfDep-- ){
        for(let eachCategories in budgetCategories){
            
          if(savings > 2){
            
                if(eachCategories === "housing" || eachCategories === "entertainment"
                    || eachCategories === "savings"){
                        //console.log(eachCategories);
                }else{
                   
                    budgetCategories[eachCategories] = parseInt(budgetCategories[eachCategories]) +1;
                    budgetCategories['savings'] = parseInt(budgetCategories['savings'])-1;
                    savings--;
                   
                }
          }
        }
        
    }
    
}



document.querySelector("button#submit").addEventListener('click',
function(){
    const fields = ['income', "age", "gender", "dependents"];

    for(let eachFields of fields){
        document.getElementById(eachFields+"-hint").
            innerHTML= ``;
        
    }
for(let eachFields of fields){
    if(document.getElementById(eachFields).value === ""){
        document.getElementById(eachFields+"-hint").
        innerHTML= `
        <div style="color:red;">
        Please, fill this field
        </div>`;
    }
}
let income = document.getElementById("income").value;
console.log(income);
income = income.replace(/,/gi, "");

income = parseInt(income);

let age =  document.getElementById("age").value;
age = parseInt(age);

let gender = document.getElementById("gender").value;
console.log(gender);

let dependents =  document.getElementById("dependents").value;
dependents = parseInt(dependents);

if(income && age && gender && dependents){
    calculateFoodAndUtilities(gender, age);
    console.log(budgetCategories);
    increaseWithDependents(dependents);
    console.log(budgetCategories);
    for(eachCategories in budgetCategories){
        document.getElementsByTagName("tbody")[0].innerHTML +=`
        <tr>
        <td>${eachCategories}</td>
        <td>${budgetCategories[eachCategories]+"%"}</td>
        <td>&#8358; ${formt(parseInt(budgetCategories[eachCategories]/100 * income).toFixed(2))}
        </tr>
        `
    }
    document.getElementsByClassName("title")[1].innerHTML=`
    <div>Budget Calculations For Your Income - &#8358; ${formt(income.toFixed(2))}
    </div>
    `
    document.getElementsByClassName("table-wrapper")[0].className += " show-result";
}else{
 
}
});