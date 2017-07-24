/**
 * Created by khongyan on 2017/3/31.
 */
import React from 'react';
import classnames from 'classnames';
import { Icon } from 'src/index'

function getStyles() {
    
    const styles = {
        icons: {
            height: 20,
            width: 20,
            display: 'block',
            marginRight: 8,
        },
        leftIcon: {
        },
        rightArrow: {
            width: 8,
            height: 8,
            marginLeft: 10
        },
        rightIcon: {
            marginLeft: 4
        }
        
    };
    
    return styles
    
}

class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
    pushElement(children, element, baseStyles, additionalProps) {
        if (element) {
            const styles = Object.assign({}, baseStyles, element.props.style);
            children.push(
                React.cloneElement(element, {
                    key: children.length,
                    style: styles,
                    ...additionalProps,
                })
            );
        }
    }
    
    createTextElement(styles, data, key, className) {
        let cn = className;
        if (React.isValidElement(data)) {
            
            let style = Object.assign({}, styles, data.props.style);
            cn = classnames(className, data.props.className);
            return React.cloneElement(data, {
                key: key,
                style: style,
                className: cn
            });
        }
        
        return (
            <div key={key} className={ cn }>
                {data}
            </div>
        );
    }
    
    render() {
        const {
            onClick, // SelectableListHOC
            value, // SelectableListHOC
            
            primaryText,
            secondaryText,
            leftIcon,
            rightArrow,
            rightIcon,
            className,
            children,
            ...other
        } = this.props;
    
        const styles = getStyles();
        const cn = classnames('lm-ui-list-item', className);
        
        if (children) return (
            <div { ...other } onClick={ (e) => onClick(value ? {value} : e) } className={ cn }>
                <div className="lm-ui-list-item-children">
                    { this.createTextElement(
                        {},
                        children,
                        'children',
                        'lm-ui-list-item-children'
                    ) }
                </div>
            </div>
        );
        
        const contentChildren = [];
       
        
        if (leftIcon) {
            const additionalProps = {
                color: leftIcon.props.color,
            };
            this.pushElement(
                contentChildren,
                leftIcon,
                Object.assign({}, styles.icons, styles.leftIcon),
                additionalProps
            );
        }
    
        if (primaryText) {
            const primaryTextElement = this.createTextElement(
                {},
                primaryText,
                'primaryText',
                'lm-ui-list-item-bd'
            );
            contentChildren.push(primaryTextElement);
        }
    
        if (secondaryText) {
            const secondaryTextElement = this.createTextElement(
                {},
                secondaryText,
                'secondaryText',
                'lm-ui-list-item-ft'
            );
            contentChildren.push(secondaryTextElement);
        }
        
        if (rightIcon) {
            this.pushElement(
                contentChildren,
                rightIcon,
                Object.assign({}, styles.rightIcon),
                {}
            );
        }
        
        if (rightArrow) { // 暂时不能配置颜色大小等
            this.pushElement(
                contentChildren,
                <i className="lm-ui-icon lm-icon-link"/>,
                Object.assign({}, styles.rightArrow),
                {}
            );
        }
        
        return (
            <div { ...other } onClick={ (e) => onClick(value ? {value} : e) } className={ cn }>
                { contentChildren }
            </div>
        )
        
    }
}

ListItem.propTypes = {
    primaryText: React.PropTypes.node,
    secondaryText: React.PropTypes.node,
    onClick: React.PropTypes.func,
    className: React.PropTypes.string,
    value: React.PropTypes.string,
    children: React.PropTypes.node,
    leftIcon: React.PropTypes.element,
    rightArrow: React.PropTypes.bool
};

ListItem.defaultProps = {
    primaryText: '',
    secondaryText: '',
    onClick: () => {},
    className: '',
    children: null,
    leftIcon: null,
    rightArrow: false
};

export default ListItem