// JavaScript source code
onmessage = function (e) {

    var n = e.data;
    var a = 1,
        b = 0;
    for (var i = 0; i < n; i++) {
        
        var c = a + b;
        a = b;
        b = c;
        postMessage(b);
    }
    
   
};


