Vue.component('boton-cuenta', {
  data: function () {
    return {
      cuenta: 0
    }
  },
  template: '<button v-on:click="cuenta++">You clicked me {{ cuenta }} times.</button>'
})

export default {
  name: 'botonCuenta',
  // ...
}