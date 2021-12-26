import {App} from 'vue'
import ElContainer from './Container.vue'

export default {
    install(app: App) {
        app.component(ElContainer.name, ElContainer)
    }
}