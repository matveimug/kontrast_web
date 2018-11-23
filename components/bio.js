export default {
  props: {
    name: '',
    text: ''
  },
  methods: {
  },
  template: `
    <div>
      <h3>{{this.name}}</h3>
      <p>{{this.text}}</p>
    </div>
  `
};