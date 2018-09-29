var size = 30;
var lib = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz@%+#!$?~-_";
var code = "";
while (size > 0) {
  code += (lib[Math.floor(Math.random()*lib.length)]);
  size--;
}
console.log(code);
