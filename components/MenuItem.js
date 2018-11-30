export default {
  props: {
    title: {type: String},
    current: {type: String},
  },
  template: `
    <div :class="'menu-item' + ( title == current ? ' active' : '')">
      <h2 class="menu-title">{{this.title}}</h2>
    </div>
  `
};