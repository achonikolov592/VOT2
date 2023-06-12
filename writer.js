function onclickOfLogout()
{
    window.close();
    window.open("/index.html");
}

var callAPI = (email,calories, fats, sugars)=>{
    if(email == "" || calories == "")
    {
        alert("Enter an email and a product!");
        console.log("eho");
        document.getElementById("form id").reset();
    }
    else 
    {
        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"email":email,"calories":calories, "fats":fats, "sugars":sugars});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://h4kwgcacre.execute-api.eu-north-1.amazonaws.com/posting", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
    }
}
/*function onclickOf()
{
    let a = document.getElementById("product calories").value;
    let e = document.getElementById("user email").value;
    console.log(a);
    if(e != "")
    {
        if(a == "")
        {let y = await x.text();
            alert("Enter a product!");
            document.getElementById("form id").reset();
        }   
        alert("Zapisano!");
        document.getElementById("form id").reset();
    }
    else
    {
        alert("Enter a emial!");
        document.getElementById("form id").reset();
    }
    
}*/