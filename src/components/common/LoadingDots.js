import React, {PropTypes} from 'react';


class LoadingDots extends React.Component{
    constructor(props,context){
        super(props,context);

        this.state = {frame:1};
    }

    componentDidMount(){
        this.interavl = setInterval(() => {
            this.setState({
                frame:this.state.frame + 1
            });
        },this.props.interval);
    }

    componentWillUnmount(){
        clearInterval(this);
    }

    render(){
        let dots = this.state.frame % (this.props.dots + 1)
        let text = '';
        while(dots>0){
            text +='.';
            dots--;
        }
        return <span {...this.props}>{text}</span>
    }

}

LoadingDots.defaultProps = {
    interval: 300, dots:3
};

LoadingDots.propTypes = {};

export default LoadingDots;