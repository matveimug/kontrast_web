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

import bio from "./components/bio.js";

new Vue({
  components: { bio },
  el: "#app",
  data: {
    loaded: false,
    sheets: []
  },
  created() {
      let self = this;
      fetch(`https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`)
          .then(res => res.json())
          .then(res => {
              self.sheets = parseSheet(res);
          });
  },
  template: `
  <div>
    <bio v-for="item in sheets" :name="item.artist" :text="item.bio" :key="item.id" />
  </div>
  `
});
