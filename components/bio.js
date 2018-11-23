export default {
  props: {
    name: {type: String},
    text: {type: String},
    pic: {type: String}
  },
  template: `
    <div>
      <img v-if="this.pic" :src="this.pic" :alt="this.name">
      <h3>{{this.name}}</h3>
      <p>{{this.text}}</p>
    </div>
  `
};