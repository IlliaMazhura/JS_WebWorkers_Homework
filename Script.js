// JavaScript source code




onmessage = function (e) {
 
    var b = e.data[1];
    for (var i = e.data[0]; i <= b; i++) {
        for (var j = 2; j <= i; j++) {
            if (i % j == 0) break;
        }
        if (j == i) postMessage(i);
    }

};