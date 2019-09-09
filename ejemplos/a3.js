Vue.component('awesome-button', {
  template: `<button @click="clickHandler">Click me for some awesomeness</button>`,
  methods: {
    clickHandler() {
      alert('YAAAS 😎');
    }
  }
});

Vue.component('game-card', {
  props: ['gameData'],
  data() {
    return {
      game: {...this.gameData}
    }
  },
  template: `
  <div style="border-radius: .25rem; border: 1px solid #ECECEC;">
  <h2>{{ game.name }} - <small>{{ game.console }}</small></h2>

  <span v-for="heart in game.rating">❤️</span>

  <button @click="increaseRating">Increase Rating</button>
</div>  `,
  methods: {
    increaseRating() {
      this.game.rating++
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
    });

