<template>
    <div>
        <h1>Buscar</h1>
        <br>
        <RouterLink v-for="(lista, i) in listas" :key="i" :to=" {name: 'PaginaBuscar', params: {id: lista.id, lista: lista.nombre}}">
           <h1>{{ lista.nombre }}</h1> 
            <br> <br>
        </RouterLink>
    </div>
</template>

<script>
export default{
    name: 'BuscarView',
    data() {
        return {
            listas : [
                {id: 1, nombre: 'Precio'},
                {id: 2, nombre: 'Marcas'},
                {id: 3, nombre: 'Proveedores'},
            ]
        }
    },
}

</script>

<style>

</style>