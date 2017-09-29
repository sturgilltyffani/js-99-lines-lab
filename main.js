/* Friends */
var friends = ["friend1", "friend2", "friend3", "friend4", "friend5"];

document.addEventListener("DOMContentLoaded", function () {

    /* Button Creation */
var btn = document.createElement('button');
btn.id = 'singButton';
var buttontext = document.createTextNode('Sing!');
btn.appendChild(buttontext);
document.body.appendChild(btn);

/* Button Function */
btn.addEventListener("click", function () {

/* Made Titles */
    for (a = 0; a < friends.length; a++) { 
        var friend = document.createElement('div');
        friend.className = 'friend';
        
        var h3 = document.createElement('h3');
            
        h3.innerText = friends[a];
        friend.appendChild(h3);
            
        for (b = 99; b > 0; b--) {
            var para = document.createElement('p');
            var lyrics = document.createTextNode(b + "lines of code in the file," + b + "lines of code;" + friends[a] + "strikes one out, clears it all out" + (b-1) + "lines of code in the file")
            if (b < 2) {
                var lyrics = document.createTextNode(b + ' line of code in the file, ' + b + ' line of code; '  + friends[a] + ' strikes it out, cleared it all out, no more lines of code in the file')
            }
            para.appendChild(lyrics);
            friend.appendChild(para);
        }        

        document.body.appendChild(friend);
    }
})
});

  