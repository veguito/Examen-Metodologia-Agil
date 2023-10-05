<template>
  <div id="b">
  <nav>
    <router-link to="/" id="a">Inicio</router-link> 
    <router-link to="/categorias"  id="a">Categorias</router-link> 
    <router-link to="/buscar"  id="a">Buscar</router-link> 
  </nav>
  <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
 
  position: relative;
  background-color: aquamarine;
  height:10px;
  border:20px solid rgb(80, 50, 100, 10);
  border-radius:100px;

}

nav a{
  
  font-weight: bold;
  color: #c73ce0;
  
  
}


nav a.router-link-exact-active {
  color: #070505;
 
}

#a{
  padding: 100px;
}
#b{
  background-color:  aqua ;
  height: 850px;
  border-top-right-radius: 53px;
  border-top-left-radius: 53px;
}


</style>
