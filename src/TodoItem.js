import React,{ Component,Fragment } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    //子组件调用父组件中的删除方法，因为子组件不能修改父组件中的数据
    handleDelete() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

    //当一个组件要从一个父组件中接收参数
    //如果这个组件第一次存在于父组件当中，不会执行
    //如果这个组件之前已经存在于父组件当中，才会执行
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('TodoItem-componentWillReceiveProps')
    // }

    //将要解绑时
    // componentWillUnmount() {
    //     console.log('TodoItem-componentWillUnmount')
    // }

    //组件被更新之前
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.content !== this.props.content) {
            return true
        }
        return false;
    }
    
    render() {
        console.log('我是子组件')
        const {content, test} = this.props;
        return (
            <div onClick={this.handleDelete}>
                {test} - {content}
            </div>
        );
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

TodoItem.defaultProps = {
    test: 'wsnd'
};

export default TodoItem