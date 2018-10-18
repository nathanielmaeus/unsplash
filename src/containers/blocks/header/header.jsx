import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from 'src/components/blocks/header';


class HeaderContainer extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}


// const mapStateToProps = (state) => {
//     return {
//         randomPhoto: getRandomPhoto(state),
//     }
// }


// const mapDispatchToProps = (dispatch) => ({
//     actions: {
//         onFetchPhoto: () => dispatch(fetchPhoto())
//     }
// })


export default connect(null, null)(HeaderContainer);