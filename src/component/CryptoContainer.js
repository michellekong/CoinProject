import React, {Component} from 'react';
import { connect } from "react-redux";
import { View,Text } from "react-native";

class CyrptoContainer extends Component {
    render(){
        return(
            <View>
                <Text>Container</Text>
                </View>
        )
    }
}

  
function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}
export default connect(mapStateToProps)(CyrptoContainer)