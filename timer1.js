const args = process.argv.slice(2);
const typeOut = function(times){
  let time = 1000;
  for (const sec of times) {
    if (isNaN(parseInt(sec)) || sec < 0) {
    console.log("Please enter a valid number");
    } else {
    time *= sec;
    setTimeout(() => {process.stdout.write('\x07');}, time);
    time = 1000;
    }
  }
  }
  if (args.length > 0){
  typeOut(args);
  }