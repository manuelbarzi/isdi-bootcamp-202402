var o = { 0: 'Peter', 1: 'Wendy', 2: 'James', length: 3 }

Array.prototype.forEach.call(o, function (elem) { console.log(elem) })
// VM498:1 Peter
// VM498:1 Wendy
// VM498:1 James


Array.prototype.forEach.apply(o, [function (elem) { console.log(elem) }])
// VM546:1 Peter
// VM546:1 Wendy
// VM546:1 James