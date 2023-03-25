function show(){
    const num = document.getElementById('number').value;
    let message = '';
    for(let i=1; i<=10; i++){
        let res = num * i;
        message += `${num} X ${i} = ${res} <br>`;
    }
    document.getElementById('mydiv').innerHTML = message;
}

