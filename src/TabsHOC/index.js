import React from 'react';

const TabsHOC = (test) => (WrappedComponent) =>
    class extends React.Component {
        constructor(props) {
            super(props);
            
            this.otherProps = {
                clickItem: this.clickItem.bind(this),
            };
            
            this.state = {
                activeIndex: this.props.selectedIndex || 0
            };
            
            // todo: doSomething, extend actions
            console.log(test)
        }
    
        componentDidMount() {
            if (this.props.withClick === true) {
                let activeIndex = this.state.activeIndex;
                let activeItem = this.props.data[activeIndex];
                this.clickItem(null, activeIndex, activeItem);
            }
        }
        
        clickItem(e, index, item) {
            let _item = Object.assign({}, { index, ...item} );
            e && e.stopPropagation();
            this.setState({
                activeIndex: index
            });
            item.onClick ? item.onClick(_item) : this.props.clickAction(_item);
        }
        
        
        // todo: class名称替换lm-ui-navbar-box
        render() {
            return (
                <WrappedComponent { ...this.props } { ...this.otherProps } { ...this.state }/>
            )
        }
    };

export default TabsHOC