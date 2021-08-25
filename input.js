const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  //process.stdout.write('.');
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
 
  stdin.on('data',handleUserInput);
  stdin.resume();
  return stdin;
};
module.exports = {
  setupInput
};