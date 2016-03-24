
        $.getJSON('data.json', function(data) {
        var output="";
        for (var i in data.users) {
            output+="<div>" + 
            data.users[i].firstName + 
            " " + 
            data.users[i].lastName + 
            " Joined in " + 
            data.users[i].time.day + " " +
            data.users[i].time.month + " " +
            data.users[i].time.year + " " +

            "</div>";
        }

        output+="";
        document.getElementById("placeholder").innerHTML=output;
  });