var john = {
    bill: [124,48,268,180,42],
    tip: function() {
        result= []
        for(var i = 0; i< this.bill.length; i ++)
        {
            switch(true) 
            {
                case this.bill[i]< 50: 
                    var tip = this.bill[i] * .2;
                     result[i] = {
                         Tip: tip,
                         Total: this.bill[i] + tip
                     }
                    break;
            }
        }
        console.log("Result", result);                    
    }
}

john.tip();