import utils from "../utils.js";

export default {
  data: function () {
    return {
      hover: false
    }
  },
  props: {
    title: {type: String},
    current: {type: String},
    emoji: {type: Array},
  },
  methods: {
    doEmoji: function () {
      return this.emoji[utils.random(0,this.emoji.length, false)];
    }
  },
  template: `
    <div 
    :class="'menu-item' + ( title == current ? ' active' : '')" 
    @mouseover="hover = true"
    @mouseleave="hover = false"
    >
      <h2 class="menu-title"><template v-if="title === current || this.hover">{{doEmoji()}} </template>{{this.title}}</h2>
      <p></p>
    </div>
  `
};