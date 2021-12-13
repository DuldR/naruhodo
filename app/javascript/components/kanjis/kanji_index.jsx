import React from 'react'


class KanjiIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchKanjis();
    }


    render () {

        if ( this.props.kanjis === undefined ) { return <h1> Loading !</h1> }

        const listKanji = this.props.kanjis.map((kanji, idx) => {
            return <li key={idx+kanji}>
                {kanji.meaning}
            </li>
        })

        return (
            <ul>
                {listKanji}
            </ul>
        )

    }
}

export default KanjiIndex