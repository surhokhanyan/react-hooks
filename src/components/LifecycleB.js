import React, {Component} from "react";

class LifecycleB extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "Suren"
        }
        console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps (props, state) {
        console.log("LifecycleB getDerivedStateFromPorps")
        return null
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("B shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("B getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("B componentDidUpdate")
    }

    render() {
        console.log("LifecycleB render")
        return(
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB;