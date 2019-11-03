import { connect } from 'react-redux'
import Listing from '../components/Listing'
import {removeBusiness} from '../redux/action'

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        businesses: state.businesses,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)