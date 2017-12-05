import React from 'react'
import PropTypes from 'prop-types';

import {SortList, SortGroup, SortToggle, SortMulti, SortLabel } from 'src/index'


class FilterBar extends React.Component {


    handleSortInfoUpdate = (ret) => {

        this.props.onFilterChange(ret)
    };


    render() {
        return (
            <div>

                <SortGroup className="demo-filter-bar"
                           onSortInfoUpdate={ this.handleSortInfoUpdate }
                >

                    <SortList
                        name='list'
                        initActiveItem={{
                            value: 'all',
                            label: '全部',
                            displayLabel: '请选择',
                            isDefault: true,
                            isAll: true
                        }}
                        onClick={ (info) => {console.log(info)} }
                        filterItem={() => {
                            return new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve(
                                        [
                                            {
                                                value: 'all',
                                                label: '全部',
                                                displayLabel: '请选择',
                                                isDefault: true,
                                                isAll: true
                                            },
                                            {
                                                value: 'byTime',
                                                label: '按时间',
                                            },
                                            {
                                                value: 'byName',
                                                label: '按名次',
                                            },
                                            {
                                                value: 'byNo',
                                                label: '按序号',
                                            }
                                        ]
                                    )
                                }, 3000)
                            })
                        }}

                         /*filterItem={[
                            {
                                 value: 'all',
                                 label: '全部',
                                 isDefault: true,
                                 isAll: true
                             },
                             {
                                 value: 'byTime',
                                 label: '按时间',
                             },
                             {
                                 value: 'byName',
                                 label: '按名次',
                             },
                            {
                                 value: 'byNo',
                                 label: '按序号',
                             }
                         ]}*/

                    />

                    <SortToggle
                        name='toggle'
                        filterItem={[
                            {
                                value: 'up',
                                label: '按名称'
                            },
                            {
                                value: 'down',
                                label: '按名称'
                            }
                        ]}
                    />

                    <SortMulti
                        name='multi'
                        label='筛选'
                        filterItem={[
                            {
                                title: '标题',
                                items: [
                                    {
                                        value: 'filter1',
                                        label: '选项1'
                                    },
                                    {
                                        value: 'filter2',
                                        label: '选项2'
                                    }
                                ]
                            },
                            {
                                title: '标题2',
                                items: [
                                    {
                                        value: 'filter3',
                                        label: '选项3'
                                    },
                                    {
                                        value: 'filter4',
                                        label: '选项4'
                                    }
                                ]
                            }
                        ]}
                    />

                    <SortLabel
                        // name='text'
                        filterItem={[
                            {
                                value: 'filter3',
                                label: '按时间2'
                            }
                        ]}
                    />


                </SortGroup>


            </div>
        )
    }
}

FilterBar.propTypes = {
    onFilterChange: PropTypes.func
};

FilterBar.defaultProps = {
    onFilterChange: () => {
    }
}

export default FilterBar
