let n = 5;
for (let i = 0; i < n; i++) {
 
  for (let j = 0; j < n-i; j++) {
    document.write('&nbsp ')
  }
  for (let l = 1; l<=i; l++) {
    document.write('*')
  }
  for (let k = 0; k<=i; k++) {
    document.write('*')
  }
  document.write("<br>")
}