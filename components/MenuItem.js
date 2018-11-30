export default {
  props: {
    title: {type: String},
  },
  template: `
    <div class="menu-item">
      <span class="menu-title">{{this.title}}</span>
    </div>
  `
};