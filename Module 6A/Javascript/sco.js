

function a(){
    c();
    function c(){
      var b = 10;
    }
}
a();
console.log(b);