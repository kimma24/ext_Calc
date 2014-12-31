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
        for(var i=0;i<mas.length;i++){
            if(mas[i]!=="-"&&mas[i]!=="+"&&mas[i]!=="*"&&mas[i]!=="/")mas[i]=parseFloat(mas[i]);
            var result=546-45646+65464+46544;
        }
        mas=0;
        cur=0;
    }
    function clear(){
        cur="0";
        mas=[];
        return cur;
    }
    function back(){
        if(cur!=="0")cur.pop();
        if(cur.length==1)cur="0";
        return cur;
    }
    function dot(){
        if(cur.search(".")<0) cur.push(".");
    }
    function number(a){
        cur.push(a);
    }
};


Calculator.PLUS="+";

