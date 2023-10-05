<template>
  <div>
    <marquee behavior="alternate " id="color"><h1>Los mejores precios te esperamos</h1></marquee>
    <br><br>
    <center> <div id="ia"><h1>SHOPPING CENTER</h1></div></center>
    <br><br>
    
    <div>
      <tr>
        <td><img id="h" src="rh.jpg"  alt=""></td>
        <td><img  id="m" src="rm.webp" alt=""></td>
        <td id="it"><img id="n" src="rn.jfif" alt=""></td>
      </tr>
    </div>
  </div>
  <br><br>
  <center> <div id="ib"> <h1> Boulevar Los Héroes entre Calle Gabriela Mistral y Calle Sisimiles, San Salvador Tel: 2241 7629. Ruta de buses: 2C, 44 Bus y Microbus, 30B y 30A. </h1> </div> </center>
</template>

<script>
export default {
  name: 'InicioView',
}
</script>

<style>
#ia{
  border: solid 1px;
  width: 400px;
  border-top: solid rgb(198, 78, 104);
  border-left: solid blueviolet;
  border-right: solid  blueviolet;
  border-bottom: solid rgb(198, 78, 104);
  
}
#ib{
  border: solid 2px;
  width: 1250px;
  border-top: solid rgb(198, 78, 104);
  border-left: solid blueviolet;
  border-right: solid  blueviolet;
  border-bottom: solid rgb(198, 78, 104);
  
}
#ic{
  width: 200px;
  margin-right: auto;
}
#h{
  width: 538px;
  height: 300px;
 
}
#m{
  width: 538px;
  height: 300px;
 

}
#n{
  width: 538px;
  height: 300px;
}
#it{
  left: 10px;
}

</style>
