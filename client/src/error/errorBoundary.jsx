import { Component } from "react";

class ErrorBoundary extends Component{

    constructor(props){
        super(props)
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    static getDerivedStateFromError(error){
        // state can also be set over here
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // you can also choose to log the error 
    }

    render(){
        return this.state.error ? <FallbackComponent/> : this.props.children
    }
}

function FallbackComponent(){
    return (
        <div>
            <h2>Something went wrong</h2>
            <details>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </details>
        </div>
    )
}

export default ErrorBoundary

