import { curry } from "lodash"
import { done } from "./broadcasters"

let createOperator = curry(
    (operator, broadcaster, listener) => {
      return operator(behaviorListener => {
        return broadcaster(value => {
          if (value === done) {
            listener(done)
            return
          }
  
          behaviorListener(value)
        })
      }, listener)
    }
  )

export let map = transform =>
createOperator((broadcaster, listener) => {
  return broadcaster(value => {
    listener(transform(value))
  })
})

export let targetValue = map(event => event.target.value)
console.log(targetValue)