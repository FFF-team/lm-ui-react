import React from 'react'

import CheckboxGroup from '../CheckboxGroup'
import Checkbox from '../Checkbox'
import Button from '../Button'

class FilterMulti extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checkboxVal: this.props.checkboxVal
        }
    }

    okBtn = () => {
        this.props.onChange({
            isAll: this.state.checkboxVal.length === 0,
            data: this.state.checkboxVal
        })
    };

    resetBtn = () => {
        this.setState({
            checkboxVal: []
        })
    };

    renderItems() {

        const { data } = this.props;

        return data.map((list, i) => {
            return (
                <dl key={ i } className="term-cell">
                    <dt>{ list.title }</dt>
                    <CheckboxGroup
                        name={'checkboxName'}
                        selectedValue={ this.state.checkboxVal }
                        onChange={(val) => {
                            this.setState({checkboxVal: val})
                        }}
                        style={{ flexDirection: 'row' }}
                    >
                        { list.items.map((item, index) => (
                            <dd key={ index }>
                                <a className="lft-item">
                                    <Checkbox mode="button"
                                              uniqueId={ item.value }
                                              text={ item.label }
                                              value={ item.value }
                                    />
                                </a>
                            </dd>)
                        ) }
                    </CheckboxGroup>

                </dl>
            )
        })
    }

    render() {

        const {
            onChange,
            checkboxVal,
            ...other
        } = this.props;

        return (
            <div className="lm-multi-filter" { ...other }>
                <div className="filter-multi-term">
                    { this.renderItems() }
                </div>
                <div className="btn-group filter-term-ft">
                    <div className='box'>
                        <Button
                            size='long'
                            btnType='grayHollow'
                            isRadius={false}
                            style={{width: '100%'}}
                            onClick={ this.resetBtn }
                        >重置</Button>
                    </div>
                    <div className="box">
                        <Button
                            size='long'
                            btnType='primary'
                            isRadius={false}
                            style={{width: '100%'}}
                            onClick={ this.okBtn }
                        >确定</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterMulti
