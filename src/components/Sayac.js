import React from 'react';
import { connect } from 'react-redux';
import {sayaciArttir} from '../actions/SayacAction';

class Sayac extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("selam")
    this.props.sayaciArttir(3);
  }

  render() {
    const {sayac} = this.props;
    return (
      <div>
        <button onClick={this.handleClick}>hEY</button>
        <div>{sayac}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        sayac: state.exampleReducer.sayac
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sayaciArttir: (data) => dispatch(sayaciArttir(data))
  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Sayac)
