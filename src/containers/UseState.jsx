import { useState, useEffect } from 'react'
import styled from 'styled-components'
import DividingLine from '../components/DividingLine'

const UseStateWrapper = styled.div`
    width: 100%;
`

function UseState() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        const countAdd = document.querySelector('#countAdd')

        const handleAdd = (event) => {
            setCount(Number(event.target.value) + 1)
            console.log('event.target.value', Number(event.target.value))
        }

        countAdd.addEventListener('click', handleAdd)

        return () => {
            countAdd.removeEventListener('click', handleAdd)
        }
    }, [])

    return (
        <UseStateWrapper>
            <h1>UseState</h1>
            <h2>說明</h2>
            <p>
                來源: <a href="https://ithelp.ithome.com.tw/articles/10257994">https://ithelp.ithome.com.tw/articles/10257994</a>
            </p>
            <p>當我們不是使用React機制呼叫setState時，由於batching機制不存在，setState就會是同步的。例如: 原生addEvent listener的callback function、setTimoout的callback function.....等。在下方的範例中，我們會發現setState後馬上印出的值會是新state值。</p>
            <h2>專案版本</h2>
            <p>react: ^16.14.0</p>
            
            <DividingLine />

            <h2>使用 addEventListener 掛載</h2>
            <p>由於batching機制不存在，setState就會是同步的。</p>
            <p>所以畫面上的 count 的值會跟 console.log() 出來的值一樣</p>
            <div>count: {count}</div>
            <button id="countAdd" value={Number(count)}>
                count + 1
            </button>

            <DividingLine />

            <h2>使用 onClick 掛載</h2>
            <p>有batching機制，所以setState是非同步的。</p>
            <p>所以畫面上的 count 的值會比 console.log() 出來的值還要新</p>
            <div>count2: {count2}</div>
            <button
                value={Number(count2)}
                onClick={(event) => {
                    setCount2(Number(event.target.value) + 1)
                    console.log('event.target.value', Number(event.target.value))
                }}
            >
                count2 + 1
            </button>
        </UseStateWrapper>
    )
}

export default UseState
