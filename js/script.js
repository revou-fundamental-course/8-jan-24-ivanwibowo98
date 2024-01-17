function hitung() {
  var sideSquare = parseFloat(document.getElementById('squareSide').value);
  var luas = sideSquare * sideSquare;
  var keliling = 4 * sideSquare;
  document.getElementById('luasP').innerHTML = 'L = S x S<br>L = ' + sideSquare + ' x ' + sideSquare + '<br>L = '+ luas

  document.getElementById('kelilingP').innerHTML = 'K = 4 x S<br>K = 4 x '+ sideSquare + '<br>K = '+ keliling

}

function reset() {
    // Mengosongkan nilai input dan hasil
    document.getElementById('squareSide').value = '';
    document.getElementById('luasP').innerHTML = '';
    document.getElementById('kelilingP').innerHTML = '';
   }