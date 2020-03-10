console.log(web);
var web = "hello";
//函数中的变量提升
function hd() {
    if (false) {
        var web2 = "hello";
    }
    console.log(web2);
}
hd();
//因此在使用var赋值时候最好把变量声明并赋值到程序的最开始

// console.log(web3);
// let web3 = "liuqi";
//TODO:let和const必须先声明后使用,否则会造成暂时性死区,TDC

// function test() {
//     console.log(web4);
//     let web4 = "hello";
// }
// test();
//函数中同样也是同样的道理
//TODO:Cannot access 'web4' before initialization

//函数参数中的TDC,a=b,b=3就会报错
function run(a = 3, b = a) {}
run();