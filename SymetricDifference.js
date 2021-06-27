function sym(...args) {
    let arg1 = args.shift(),
        test = [],
        arg2 = args.shift();
    while(args2 !== undefined){
        let result = [];
        arg1.forEach(function(value) {
            if(!arg2.includes(value) && !result.includes(value)){
                result.push(value);
            }
        });
        arg2.forEach(function(value) {
            if(!arg1.includes(value) && !result.includes(value)){
                result.push(value);
            }
        });
        arg1 = result;
        arg2 = args.shift();
    }
    return arg1;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);