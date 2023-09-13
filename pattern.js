let n = 5;
for (let i = 0; i < n; i++) {
 
  for (let j = 0; j < n-i; j++) {
    process.stdout.write(' ')
  }
  for (let l = 1; l<=i; l++) {
    process.stdout.write('*')
  }
  for (let k = 0; k<=i; k++) {
    process.stdout.write('*')
  }
  console.log();}

