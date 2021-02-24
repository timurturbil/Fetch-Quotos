
function myfunction() {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
    .then((data) => data.json())
    .then((data) => {
        document.getElementById("theTextarea").innerHTML = data.quotes[0].text;
        document.getElementById("theTextarea2").innerHTML = data.quotes[0].author;
    });   
   }  
 /*   'URL','heyyy' */
Share = {
    twitter: function() {
    url = 'http://twitter.com/share?';
    url += 'text=' + encodeURIComponent(document.getElementById("theTextarea").innerHTML + "  " + "Author: " + document.getElementById("theTextarea2").innerHTML);
    url += '&url=' + encodeURIComponent(' ');
    Share.popup(url);
    },
    popup: function(url) {
    window.open(url,'','toolbar=0,status=0,width=626, height=436');
    }
    };
    

/* 
    <a onclick="Share.twitter('URL','TITLE')"> Share the quote in twitter</a>
    <a href="https://twitter.com/intent/tweet?original_referer=
    http%3A%2F%2Ffiddle.jshell.net%2F_display%2F&text=TITLE&url
    =URL" target="_blank" onclick="return Share.me(this)">Share</a> */



/*     <a href="https://twitter.com/intent/tweet?original_referer=
    http%3A%2F%2Ffiddle.jshell.net%2F_display%2F&text=TITLE&url
    =URL" target="_blank" onclick="return Share.me(this)">Share</a> */


    