

// Define a new component called boton-cuenta
Vue.component('boton-cuenta', {
  data: function () {
    return {
      cuenta: 0
    }
  },
  template: '<button v-on:click="cuenta++">You clicked me {{ cuenta }} times.</button>'
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})



new Vue({ el: '#app-componente' });



//window.onload = function () {


    const url = 'api/buscaIrregularidad.php?entidad=Zacatecas';
    const url1 = 'api/buscaIrregularidad.php';
    const url2 = 'api/buscaIrregularidadPresuntos.php';

// input
    var lee = new Vue({
        el: '#lee',
        data: {
          entidad: 'ejemplo de doble ruta'
        }
    }) 
    let datos = {
        'entidad': lee.entidad
    };

// Form Data
    const datitos = new FormData();
    datitos.append('entidad', lee.entidad);

    var app5 = new Vue({
        el: '#app-5',
        data: {
          message: lee.entidad
        },
        methods: {
          reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
          }
        }
    })




    let fetchData = { 
        method: 'POST', 
        body: datitos,
        headers: new Headers()
    }
    
    const a1 = new Vue({
        el: '#a1',
        data: { 
          claves: [] 
        },
        computed: {
            d1 () {
              return this.claves.length
            }
        },
        created () {
            fetch(url1, fetchData)
            .then (response => response.json())
            .then(json => {
                //console.log(json);
                this.claves = json
            })
            .catch(function() {
              alert("No podemos conectarnos");
            })
        }
    })

    const a2 = new Vue({
      el: '#a2',
      data: { 
        claves: [] 
      },
      computed: {
          d2 () {
            return this.claves.length
          }
      },
      created () {
          fetch(url2, fetchData)
          .then (response => response.json())
          .then(json => {
              this.claves = json
          })
          .catch(function() {
            alert("No podemos conectarnos");
          })
      }
  })

  const a3 = new Vue({
    el: '#a3',
    data: { 
      dd3:5
    },
    computed: {
      d3 () {
        return a2.d2 + a2.d2
      }
    }
     

  })


  var a4 = new Vue({
    el: "#a4",
    data: {
      d4: 4
    }
  }) 

  var a5 = new Vue({
    el: "#a5",
    data: {
      d5: 5
    }
  }) 

  var a6 = new Vue({
    el: '#a6',
    data: { 
      d6: a4.d4 + a5.d5
    }
  })


  // bitcoin
    new Vue({
        el: '#moneda',
        data () {
          return {
            info: null
          }
        },
        filters: {
            currencydecimal (value) {
              return value.toFixed(2)
            }
          },
        mounted () {
          axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response.data.bpi))
        }
      })


// componente
      Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
      })

    var app7 = new Vue({
        el: '#app-7',
        data: {
          comida: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
          ]
        }
    })




  var app2 = new Vue({
      el: '#app-2',
      data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
  })

  // app2.message =" este texto tiene bind"

  var app3 = new Vue({
      el: '#app-3',
      data: {
        seen: true
      }
  })
  // app3.seen = false;


  var app4 = new Vue({
      el: '#app-4',
      data: {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
  })
  app4.todos.push({ text: 'New item' })


// }