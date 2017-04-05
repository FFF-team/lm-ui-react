import React from 'react'

const Desc = () => {
    return (
        <div className="demo-desc">
            {/*Sort*/}
            <table>
                <caption>Sort Properties</caption>
                <thead>
                <tr>
                    <th>name</th><th>type</th><th>default</th><th>description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>value</td>
                    <td>number</td>
                    <td>0</td>
                    <td>区分tab的唯一值</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>string</td>
                    <td>'sort'</td>
                    <td>排序文字</td>
                </tr>
                <tr>
                    <td>clickAction</td>
                    <td>function</td>
                    <td>{'() => {}'}</td>
                    <td>点击排序后的行为</td>
                </tr>
                <tr>
                    <td>onSelectAction</td>
                    <td>function</td>
                    <td>{'() => {}'}</td>
                    <td>适用于多个sort为一组sortGroup情况，点击当前sort后的行为。</td>
                </tr>
                <tr>
                    <td>sortInfo</td>
                    <td>array</td>
                    <td>[]</td>
                    <td>
                        <p>默认排序</p>
                        <p>单项排序: [key: '', sortBy: 0].0为升序，1为降序</p>
                        <p>双向排序: ['双向排序key1', '双向排序key2'].默认为0</p>
                    </td>
                </tr>
                </tbody>
            </table>
            
            {/*List*/}
            <table>
                <caption>ListItem Properties</caption>
                <thead>
                <tr>
                    <th>name</th><th>type</th><th>default</th><th>description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>value</td>
                    <td>string/number</td>
                    <td></td>
                    <td>区分listItem的唯一value值</td>
                </tr>
                <tr>
                    <td>primaryText</td>
                    <td>string</td>
                    <td></td>
                    <td>listItem内容</td>
                </tr>
                <tr>
                    <td>onSelectAction</td>
                    <td>function</td>
                    <td>{'() => {}'}</td>
                    <td>点击当前项目后的行为</td>
                </tr>
                </tbody>
            </table>
            
            {/*SelectedList*/}
            <table>
                <caption>NList／SortGroup</caption>
                <thead>
                <tr>
                    <th colSpan="4">
                        <code style={{'textAlign': 'left'}}>
                            <pre>
{`
const SelectedComponent = SelectableListHOC({
    selectedStyle: {
        background: 'yellow'
    }
})(WrappedComponent);
`}
                            </pre>
                        </code>
                        <p>
                            将WrappedComponent下的每一项转化为可选择的component,可传入当前选中的style obj。
                            List则会增加属性onSelectAction(选中某项触发的行为)
                        </p>
                    </th>
                </tr>
                <tr>
                    <th>name</th><th>type</th><th>default</th><th>description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>selectedValue</td>
                    <td>string/number</td>
                    <td></td>
                    <td>当前选中的项</td>
                </tr>
                <tr>
                    <td>onSelectedChange</td>
                    <td>function</td>
                    <td></td>
                    <td>选中项改变后触发</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Desc