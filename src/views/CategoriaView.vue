<template>
  <div class="about">
    <h1>Categorias</h1>
    <select v-model="opcion" >
      <option value="">Seleccione una Categoria</option>
      <option value="1">Niños</option>
      <option value="2">Caballeros</option>
      <option value="3">Damas</option> 
    </select>
    
    <div v-if="opcion==niño ">
      <router-link  v-for="(niño, i) in niños" :key="i" :to="`/${niño.id}/${niño.nombre}`" >
       <br>
        <h1>{{ niño.nombre }}</h1>
       <br><br>
    </router-link>
    </div>

    <div v-if="opcion==hombre ">
      <router-link  v-for="(caballero, i) in caballeros" :key="i" :to="`/${caballero.id}/${caballero.nombre}`" >
       <br>
        <h1>{{ caballero.nombre }}</h1>
       <br><br>
    </router-link>
    </div>

    <div v-if="opcion==dama ">
      <router-link  v-for="(dama, i) in damas" :key="i" :to="`/${dama.id}/${dama.nombre}`" >
       <br>
       <h1> {{ dama.nombre }}</h1>
       <br><br>
    </router-link>
    </div>
    

  </div>
</template>

<script>
export default{
  name: 'CategoriasView',
  data() {
    return {
      niños :[
         { id: 1, nombre: 'Camisa'}, 
         { id: 2, nombre: 'Pantalon formal '}, 
         { id: 3, nombre: 'Camisa '}, 
         { id: 4, nombre: 'jeams '}
    ],
      caballeros : [
         { id: 1, nombre: 'Camisa Casual'}, 
         { id: 2, nombre: 'Pantalon casual '}, 
         { id: 3, nombre: 'Camisa Formal'}, 
         { id: 4, nombre: 'Pantalón Formal'}
      ],
      damas : [
         { id: 1, nombre: 'Vestidos'}, 
         { id: 2, nombre: 'Pantalon casual '}, 
         { id: 3, nombre: 'Camisa Formal'}, 
         { id: 4, nombre: 'Licras'}
      ],
      opcion: '',
      niño: '1',
      hombre:'2',
      dama: '3'
    }
  
  },
}
</script>

<style>
select{
  width: 500px;
  height: 50px;
  font-size:40px;
}
</style>
