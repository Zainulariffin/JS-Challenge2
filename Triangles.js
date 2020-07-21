

// for loop
// String +

/// do the fist column
/// every iteration add a new "#"

var hashtag = "#"
for ( var i = 0 ; i < 5 ; i++) {
  document.write(hashtag)
  document.write("<br/>")
  hashtag += "#"
}
for (var i = 0 ; i < 4 ; i++) {
  
  // find a formula to get
  // 4 4 i=0
  // 3 4 i=1
  // 2 4 i=2
  // 1 4 i=3
  for (var j = 0 ; j < 4-i ; j++)
  document.write("#")
  document.write("<br/>")
  
}


