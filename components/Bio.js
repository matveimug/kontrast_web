export default {
  props: {
    name: {type: String},
    text: {type: String},
    pic: {type: String}
  },
  template: `
    <div class="bio-container">
      <img class="bio-pic" v-if="this.pic" :src="this.pic" :alt="this.name">
      <p class="bio-body">{{this.text}}</p>
    </div>
  `
};