function validation() {

    var url = document.form1.url.value.toString();

    var pattern = /https?|ftp|telnet/;
    var pattern1 = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}|(([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6})/;
    var pattern2 = /:[0-9]?[0-9]?[0-9]?[0-9]?[0-9]/;

    var i = 0;

    var protocol;
    var domen;
    var port;
    var path;


    protocol = pattern.exec(url);
    if (pattern.test(protocol)){
        protocol = protocol.toString();
        i = i + protocol.length + 3;
    }
    else protocol = false;

    domen = pattern1.exec(url);
    if (pattern1.test(domen)){
        domen = domen[0].toString();
        i = i + domen.length;
    }
    else domen = false;

    port = pattern2.exec(url);
    if (pattern2.test(port)){
        port = port.toString();
        i = i + port.length;
        port = port.substring(1, port.length);//удаление двоеточия
    }
    else port = false;


    url = url.substring(i, url.length);

    alert('protocol: '+ protocol + '\n' + 'domen: ' + domen + '\n' + 'port: ' + port + '\n' + 'path: ' + url);

}