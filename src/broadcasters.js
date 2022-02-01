import { curry } from "lodash"
import { useState,useEffect } from "react"
export let done = Symbol("done")
export let createInterval = curry((time, listener) => {
    let i = 0
    let id = setInterval(() => {
      listener(i++)
    }, time)
    return () => {
      clearInterval(id)
    }
  })


export let useBroadcasters =(broadcasters,deps=[]) =>{
    let [state, setState] = useState(null)
    useEffect(()=>{
        broadcasters(setState)
    },deps)

    return state
}