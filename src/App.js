import { useState,useEffect, useCallback } from "react"
import { createInterval,useBroadcasters } from "./broadcasters"
import {targetValue} from './operators'
let listeners
let callBackListeners = value => {
     if(typeof value === "function"){
         listeners = value
         return
     }
     listeners(value)
}

export function App() {
    let onInput = useCallback(callBackListeners)
    let state = useBroadcasters(targetValue(onInput))
    return (
        <div>
          <input
            type="text"
            onInput={onInput}
          />
          <p>{state}</p>
        </div>
      )
  }