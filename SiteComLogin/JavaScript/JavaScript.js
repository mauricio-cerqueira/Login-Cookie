function LogOff() {
    // Data no passado
    var data = new Date(2010, 0, 01);
    // Converte a data para GMT
    data = data.toGMTString();
    // Apaga o cookie
    document.cookie = 'UserLogin=; expires = ' + data + '; path = /';
    window.location.href = "./index.cshtml";
}