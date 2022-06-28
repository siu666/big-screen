/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@jiaminghi/data-view' {
  import dataV from '@jiaminghi/data-view'
  export default dataV
}
declare module 'lodash' {
  import lodash from 'lodash'
  export default lodash
}