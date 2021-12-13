import { connect } from 'react-redux'
import { fetchKanjis } from '../../actions/kanji_actions'
// import { selectAllKanjis} from '../../reducers/selectors'
import KanjiIndex from './kanji_index'


const mapStateToProps = state => ({

    kanjis: state.kanji

})

const mapDispatchToProps = dispatch => ({
    fetchKanjis: () => dispatch(fetchKanjis())
})

export default connect(mapStateToProps, mapDispatchToProps)(KanjiIndex)