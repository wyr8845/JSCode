function sum(){
    if (typeof arguments[0] == 'number')
        var result = 0;
    else
        var result = '';
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}