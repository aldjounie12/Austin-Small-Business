import { connect } from 'react-redux'
import Business from '../components/Business'

const mapStateToProps = (state) => {
    return {
        business: state.business,
        user:state.user
    };
};

export default connect(mapStateToProps)(Business)
