// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    var tip,tax,totalCost;
    tip=parseFloat(readLine());
    tax=parseFloat(readLine());
    totalCost=parseInt(readLine());
    
    tip=meal_cost*(tip_percent/100);
    // console.log((tip).toFixed(1));
    tax=meal_cost*(tax_percent/100);
    // console.log((tax).toFixed(2));
    totalCost=tip+tax+meal_cost;
    console.log((totalCost).toFixed(0));
    
    
    }