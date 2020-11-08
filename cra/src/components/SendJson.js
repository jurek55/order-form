/* const SendJson=()=>{
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    };
    xhr.open('POST', 'https://jkunicki.pl/dish', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(state));
}
export default SendJson; */