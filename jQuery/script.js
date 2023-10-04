let box = $("#box");
box.html("<b>This is a div</b>");
let b = true;
$("button").click(()=>{
    b = !b;
    b ? box.hide() : box.show();
})
// https://blog.logrocket.com/localstorage-javascript-complete-guide/