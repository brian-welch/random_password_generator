var size = 30;
var lib = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789abcdefghijkmnopqrstuvwxyz@%+#!$?~-_";
var code = "";
while (size > 0) {
  code += (lib[Math.floor(Math.random()*lib.length)]);
  size--;
}
console.log(code);
