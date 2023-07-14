import React, {Component} from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "Suren"
        }
        console.log("LifecycleA constructor")
    }

    static getDerivedStateFromProps (props, state) {
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
        console.log("Finish")
    }

    shouldComponentUpdate() {
        console.log("A shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("A getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("A componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "Marine"
        })
    }

    render() {
        console.log("LifecycleA render");
        return(
            <div>
                Lifecycle A
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA;