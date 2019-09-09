Vue.component('awesome-button', {
    template: `<button @click="clickHandler">Click me for some awesomeness</button>`,
    methods: {
      clickHandler() {
        alert('YAAAS 😎');
      }
    }
  });

const app = new Vue({
    el: '#app', // 1
    data: { 
        games: [
            { name: 'Super Mario 64', console: 'Nintendo 64', rating: 4 },
            { name: 'The Legend of Zelda Ocarina of Time', console: 'Nintendo 64', rating: 5 },
            { name: 'Secret of Mana', console: 'Super Nintendo', rating: 4 },
            { name: 'Fallout 76', console: 'Multiple', rating: 1 },
            { name: 'Super Metroid', console: 'Super Nintendo', rating: 6 }
          ]    
        },
    methods: { // 1
        increaseRating(game){
            game.rating++;
        }      
      }
    });