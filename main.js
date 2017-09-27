var friends = ["friend1", "friend2", "friend3", "friend4", "friend5"];
for (a = 0; a <= friends.length; a++) { 
    console.log (friends[a] + ":");
    for (b = 99; b > 0; b--) {
        console.log (b + "lines of code in the file," + b + "lines of code;" + friends[a] + "strikes one out, clears it all out" + (b-1) + "lines of code in the file")
        if (b < 2) {
            console.log (b + ' line of code in the file, ' + b + ' line of code; '  + friends[a] + ' strikes it out, cleared it all out, no more lines of code in the file')
        }
    }        
}