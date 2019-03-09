import Vue from 'vue'
import LoadData from './components/loadData'

Vue.config.productionTip = false

new Vue({
  render: h => h(LoadData, {
    props: {
      title: 'Monsieur',
      obj: {
        message: 'helloo you',
        url: 'http://google.com'
      }
    }
  }),
}).$mount('#app')
