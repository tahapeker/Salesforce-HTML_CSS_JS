async function show(){
    const divElement = document.getElementById("mydiv");
    let myResult = new Promise(function(resolve){
        setTimeout(function () {resolve('I love JS !');}, 3000);
    });
    divElement.innerHTML = await myResult;
    console.log('==> '+myResult);
}


show();