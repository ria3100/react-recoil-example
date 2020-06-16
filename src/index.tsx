import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

import { TodoList } from '~/components/TodoList'

ReactDOM.render(
  <>
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  </>,
  document.getElementById('root')
)
