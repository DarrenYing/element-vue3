import { getCurrentInstance,ComponentInternalInstance } from 'vue'


export function useGlobalConfig(){
    const instance:ComponentInternalInstance|null =getCurrentInstance()
    if(!instance){
        console.log('useGlobalConfig 必须得在setup里面调用')
        return
    }
    return instance.appContext.config.globalProperties.$BUTTON || {}
}