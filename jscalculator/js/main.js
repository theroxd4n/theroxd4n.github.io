function insert(num) {
    document.form.textview.value = document.form.textview.value+num;
    
}
function equals(){
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval (document.form.textview.value)
    }

}
function clean(){
    var empty ="";
    document.form.textview.value = empty;
    
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}