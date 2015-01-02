function Calculator (){
    var mas=[], cur="0";

    function operation(op){
        mas.push(cur);
        mas.push(op);
        cur="0";
        return op;
    }

    function add(){
        return operation("+");
    }
    function min(){
        return operation("-");
    }
    function mult(){
        return operation("*");
    }
    function div(){
        return operation("/");
    }
    function equals(){
        mas.push(cur)
        var result="";
        for(var i=0;i<mas.length;i++){
            result+=mas[i];
        }
        mas=[];
        cur=0;
        return eval(result);
    }
    function clear(){
        cur="0";
        mas=[];
        return cur;
    }
    function back(){
        if(cur.length==1)cur="0";
        else cur = cur.substr(0, cur.length - 1);
        return cur;
    }
    function dot(){
        if(cur.search(".") < 0) cur.push(".");
    }
    function number(a){
        cur = cur === "0" ? a : cur + a;
        return cur;
    }
    
    return {
        operation: operation,
        dot: dot,
        number: number,
        back: back,
        clear: clear,
        equals: equals
    }
};


Calculator.PLUS="+";

