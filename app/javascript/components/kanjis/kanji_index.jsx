import React from 'react'


class KanjiIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("Fired")
        this.props.fetchKanjis();
    }


    render () {
        return(
            <h1>
                Kanjis!
            </h1>
        )
    }
}

export default KanjiIndex