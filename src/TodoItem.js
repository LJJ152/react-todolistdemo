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

    render() {
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