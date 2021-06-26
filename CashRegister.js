function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let cashRegister = 0;
    cid.forEach(function(value){
        cashRegister += value[1];
    });
    let status = "",
        changeArray = [];
    if(cashRegister === change){
        status = "CLOSED";
        changeArray = cid;
    }
    else {
        status = "OPEN";
        changeArray = getChangeTable(change, cid);
    }
    if(changeArray.length == 0)
        status = "INSUFFICIENT_FUNDS";
    console.log({status: status, change: changeArray});
    return {status: status, change: changeArray};
}


function getChangeTable(change, cid) {
    let changeArray = [];
    change *= 100;
    cid.forEach(function(value){
        value[1] *= 100;
    });
    if(change >= 10000){
        let val = Math.floor(Math.min(cid[8][1]/10000, change/10000))
        change -= val * 10000;
        changeArray.push(["ONE HUNDRED", val * 100]);
    }
    if(change >= 2000){
        let val = Math.floor(Math.min(cid[7][1]/2000, change/2000))
        change -= val * 2000;
        changeArray.push(["TWENTY", val * 20]);
    }
    if(change >= 1000){
        let val = Math.floor(Math.min(cid[6][1]/1000, change/1000))
        change -= val * 1000;
        changeArray.push(["TEN", val * 10]);
    }
    if(change >= 500){
        let val = Math.floor(Math.min(cid[5][1]/500, change/500))
        change -= val * 500;
        changeArray.push(["FIVE", val * 5]);
    }
    if(change >= 100){
        let val = Math.floor(Math.min(cid[4][1]/100, change/100))
        change -= val * 100;
        changeArray.push(["ONE", val]);
    }
    if(change >= 25){
        let val = Math.floor(Math.min(cid[3][1]/25, change/25))
        change -= val * 25;
        changeArray.push(["QUARTER", val * 0.25]);
    }
    if(change >= 10){
        let val = Math.floor(Math.min(cid[2][1]/10, change/10))
        change -= val * 10;
        changeArray.push(["DIME", val * 0.1]);
    }
    if(change >= 5){
        let val = Math.floor(Math.min(cid[1][1]/5, change/5))
        change -= val * 5;
        changeArray.push(["NICKEL", val * 0.05]);
    }
    if(change >= 1){
        let val = Math.floor(Math.min(cid[0][1], change))
        change -= val;
        changeArray.push(["PENNY", val * 0.01]);
    }
    console.log("change - " + change);
    if(change != 0)
        return [];
    else
        return changeArray;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])