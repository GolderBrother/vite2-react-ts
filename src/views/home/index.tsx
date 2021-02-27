import React, { useState } from 'react'
import logo from '~/logo.svg'
// 警告：antd.js?v=3a2dd9f5:57983 You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce Home bundle size.
// Vite 会对 npm 依赖进行预构建并重写为合法的 url。在本项目中，Vite 将 Antd 预构建到 /node_moduls/.vite 文件夹，并且将 url 重写为 /node_modules/.vite/antd.js?v=d2a18218，因此会出现这个警告。
import { DatePicker } from 'antd';
import './index.less'

export const Home: React.FC = (props: any) => {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <DatePicker />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>Home.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="Home-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

// export default Home
