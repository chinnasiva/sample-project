import { Component } from 'react';

class SimpleClassComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,

        }


    }

    handlePlusClick = () => {
        // console.log("clicked");
        this.setState({
            number: this.state.number + 1,
            name: "U clicked plus"
        })
    }
    handleMinusClick = () => {
        // console.log("clicked");
        this.setState({
            number: this.state.number - 1,
            name: "U clicked MInus"
        })

    }



    componentDidMount() {
        console.log("did mount clicked");
    }

    shouldComponentUpdate() {
        console.log("shouldclikdedd");
        return true;

    }
    componentDidUpdate() {
        console.log("did update clicked");
        // }
    }


        render() {
            console.log("rendered");
            return (
                <>
                    <h1 style={{ color: "blue" }}>Counter Project in ClassComponent</h1>
                    <p>{this.props.title}</p>
                    <button onClick={this.handlePlusClick}>Increment(+)</button>
                    <p>{this.state.number}</p>
                    <button onClick={this.handleMinusClick}>Decrement(-)</button>
                </>
            )
        }
    }




export default SimpleClassComp;