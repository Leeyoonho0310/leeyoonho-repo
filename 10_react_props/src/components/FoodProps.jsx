import { Component } from "react";
import PropTypes from "prop-types";

export default class FoodProps extends Component {
  render() {
    console.log(this.props);

    return (
      <>
        <h1>내가 좋아하는 과일</h1>
        <div>
          {this.props.fruit}는 {this.props.color}이고, 맛은 {this.props.taste}{" "}
          맞으실까요?
        </div>
      </>
    );
  }

  static defaultProps = {
    fruit: "바나나",
  };
}

FoodProps.propTypes = {
  fruit: PropTypes.string,
  color: PropTypes.string,
  taste: PropTypes.string, // payment props는 필수값으로 지정
};
