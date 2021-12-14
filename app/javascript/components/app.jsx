import * as React from "react"
import KanjiIndexContainer from './kanjis/kanji_index_container'


const App = () => (

    <div className={"main-page"}>

        <aside className={"index-container"}>
            <KanjiIndexContainer />
        </aside>

        <div className={"main-container"}>
            <h1>
                Put the kanji Presentation here!
            </h1>
        </div>

    </div>

)

export default App