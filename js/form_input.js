function setInput() {
    var a = document.forms['form']['nama'].value;
    var b = document.forms['form']['tempat_lahir'].value;
    var c = document.forms['form']['tanggal'].value;
    var d = document.forms['form']['alamat'].value;
    var e = document.forms['form']['nama_ayah'].value;
    var f = document.forms['form']['nama_ibu'].value;

    var table = document.getElementById("table_input");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
    cell5.innerHTML = e;
    cell6.innerHTML = f;

}
