const parseSheet = data => {
    return data.feed.entry.map(entry => {
        return Object.keys(entry)
            .map(field => {
                if (field.startsWith("gsx$")) {
                    return [field.split("$")[1], entry[field].$t];
                }
            })
            .filter(field => field)
            .reduce((field, item) => {
                field[item[0]] = item[1];
                return field;
            }, {});
    });
};
const id = '1rMcOKXYWOgcd7y0uxvaUw--VMwcz3nKr9D4Zo58itRU';

import Bio from "./components/Bio.js";
import Menu from "./components/Menu.js";
import MenuItem from "./components/MenuItem.js";
import Content from "./components/Content.js";

new Vue({
  components: { Bio, Menu, Content, MenuItem },
  el: "#app",
  data: {
    loaded: false,
    sheets: [],
    current: ''
  },
  created() {
      fetch(`https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`)
          .then(res => res.json())
          .then(res => {
              this.sheets = parseSheet(res);
              console.log(res);
          });
  },
  template: `
  <div class="page">
    <Menu>
      <MenuItem @click.native="current = item.artist" v-for="item in sheets" :title="item.artist" />
      <MenuItem title="About" @click.native="current = 'About'"/>
      <p>{{current}}</p>
    </Menu>
    <Content>
      <Bio 
        v-for="item in sheets" 
        :name="item.artist" 
        :text="item.bio" 
        :key="item.id" 
        :pic="item.profilepic" />
    </Content>
  </div>
  `
});
