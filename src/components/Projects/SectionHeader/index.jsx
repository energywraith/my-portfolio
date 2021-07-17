import React from "react"
import Typewriter from "typewriter-effect"
import { Header } from "./index.style"

const SectionHeader = React.forwardRef(({ inView, content }, ref) => {
  return (
    <Header ref={ref}>
      {inView &&
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString(content)
              .callFunction(state => state.elements.cursor.style.display = "none")
              .pauseFor(200)
              .callFunction(state => state.elements.container.style.backgroundSize = "100% 3px")
              .start()
          }}
        />
      }
    </Header>
  )
})

export default SectionHeader