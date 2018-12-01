const id = '1rMcOKXYWOgcd7y0uxvaUw--VMwcz3nKr9D4Zo58itRU';

import utils from "./utils.js";
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
    current: '',
    emoji: ['💩','👹','😻','😭','🤠','👻','💀','👺','😎','🤑','🤯','👁','💁🏻','💅🏿','🍌','🥑','🥚','😂']
  },
  created() {
      fetch(`https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`)
          .then(res => res.json())
          .then(res => {
              this.sheets = utils.parseSheet(res);
              this.current = this.sheets[0].artist
          });
  },
  template: `
  <div class="page">
    <Menu>
      <MenuItem 
      @click.native="current = item.artist" 
      v-for="item in sheets" 
      :title="item.artist"
      :current="current" 
      :emoji="emoji"/>
    </Menu>
    <Content>
      <Bio 
        v-if="item.artist === current"
        v-for="item in sheets" 
        :name="item.artist" 
        :text="item.bio" 
        :key="item.id" 
        :pic="item.profilepic" />
    </Content>
  </div>
  `
});
