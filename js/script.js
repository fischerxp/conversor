// pega o id do botão no html e faz as conversoes por ele, cria as variaveis das outras temperaturas e converte elas, colocando no placeholder
button1 = document.querySelector("#buttonO").onclick = function(){
    cel = document.querySelector("#cel")
    // parse int por que é número
    celv = parseInt(cel.value);
    // cria as variaveis das temperaturas e faz a conversão de celsius para cada uma, na let valuef por exemplo, ta convertendo celsius para fahrenheit
    let valuef = ((celv*9/5)+32).toFixed(2);
    let valuek = (celv+273.15).toFixed(2);
    let valuer = (((celv+273.15)*9)/5).toFixed(2);
    // aqui ta setando os valores para cada uma das conversoes direto no placeholder
    document.getElementById('fah').placeholder=(valuef)
    document.getElementById('kel').placeholder=(valuek)
    document.getElementById('ran').placeholder=(valuer)
    document.getElementById('fah').value=""
    document.getElementById('kel').value=""
    document.getElementById('ran').value=""
  }

  //para o resto dos botões é o mesmo esquema, mas a ordem das contas são diferentes
  button2 = document.querySelector("#buttonT").onclick = function(){
    fah = document.querySelector("#fah")
    fahv = parseInt(fah.value);
    let valuec = ((fahv-32)*5/9).toFixed(2);
    let valuek = (((fahv-32)*5/9)+273.15).toFixed(2);
    let valuer = (fahv+459).toFixed(2);
    document.getElementById('cel').placeholder=(valuec)
    document.getElementById('kel').placeholder=(valuek)
    document.getElementById('ran').placeholder=(valuer)
    document.getElementById('cel').value=""
    document.getElementById('kel').value=""
    document.getElementById('ran').value=""
  }
  button3 = document.querySelector("#buttonH").onclick = function(){
    kel = document.querySelector("#kel")
    kelv = parseInt(kel.value);
    let valuec = (kelv-273.15).toFixed(2);
    let valuef = ((kelv-273.15)*9/5+32).toFixed(2);
    let valuer = (kelv*1.8).toFixed(2);
    document.getElementById('cel').placeholder=(valuec)
    document.getElementById('fah').placeholder=(valuef)
    document.getElementById('ran').placeholder=(valuer)
    document.getElementById('cel').value=""
    document.getElementById('fah').value=""
    document.getElementById('ran').value=""
  }
  button4 = document.querySelector("#buttonF").onclick = function(){
    ran = document.querySelector("#ran")
    ranv = parseInt(ran.value);
    let valuec = ((ranv-491.67)*5/9).toFixed(2);
    let valuef = (ranv-459.67).toFixed(2);
    let valuek = (ranv*5/9).toFixed(2);
    document.getElementById('cel').placeholder=(valuec)
    document.getElementById('fah').placeholder=(valuef)
    document.getElementById('kel').placeholder=(valuek)
    document.getElementById('cel').value=""
    document.getElementById('fah').value=""
    document.getElementById('kel').value=""
  }