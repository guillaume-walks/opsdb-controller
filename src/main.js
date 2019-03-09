import Vue from 'vue'
import LoadData from './components/loadData'

Vue.config.productionTip = false

new Vue({
  render: h => h(LoadData, {
    props: {
      title: 'todos',
      obj: {
        message: 'helloo you',
        url: 'http://google.com'
      }
    }
  }),
}).$mount('#app')
