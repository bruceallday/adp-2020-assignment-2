import { createContext } from 'react'

export const defaultContext = {
         // GAME CONTEXT HERE

         // EXAMPLE
    // player: 0,
    // togglePlayer: () => {
    //     if (defaultContext.player == 0) {
    //         defaultContext.player = 1;
    //     } else {
    //         defaultContext.player = 0;
    //     }
    // }
}

export default createContext(defaultContext)
