<template>
    <div>
        <h1>Listado</h1>
        
      <h2>{{ $route.params.lista }}</h2>
       
<!--*** ID:
       {{ $route.params.id }}*** -->
       <div v-if="idlista==1">
            <div v-for="(lista, i) in precio" :key="i">
                <br> <h1>{{ lista }}</h1> 
            </div>
       </div>

       <div v-if="idlista==2">
            <div v-for="(lista, i) in marca" :key="i">
                <br> <h1>{{ lista }}</h1> 
            </div>
       </div>

       <div v-if="idlista==3">
            <div v-for="(lista, i) in proveedor" :key="i">
                <br> <h1>{{ lista }}</h1> 
            </div>
       </div>
        
    </div>
</template>

<script>
export default{
    name: 'PaginaBuscar',
    data() {
        return {
            idlista : this.$route.params.id,
            precio : [
                 'Blusa: Dama - precio: $ 20.00 ',
                 'pantalon jeans: Niño - precio: $ 30.00 ',
                 'Camisa Formal: Caballero - precio: $ 25.00 ',
            ],
            marca : [
                'NIKE',
                'Reebok',
                'FILA',
                'adidas',
            ],
            proveedor : [
                'Moda Store',
                'Femina point',
                'Clothes Kids',
            ],
        }
    },
}

</script>

<style>

</style>