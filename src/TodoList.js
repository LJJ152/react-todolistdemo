import React,{ Component,Fragment } from 'react'
import TodoItem from "./TodoItem";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            list: [],
        };

        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    //当input框中的值改变时触发的事件
    handleInputChange() {

        // this.setState({
        //     inputValue: e.target.value
        // } )

        // const value = e.target.value;
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    //点击按钮的事件 添加item,并清除当前值
    handleBtnClick() {
        /*this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })*/
        this.setState(
            (prevState) => ({
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            })
        )
    }

    //删除list中的数据
    handleDelete(index) {
        this.setState(
            prevState => {
                const list = [...prevState.list];
                list.splice(index, 1);
                return {list};
            }
        )
    }

    //返回item
    getTodoItem() {
        return this.state.list.map( (item, index) => {
                return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleDelete}
                    />
                )
            }
        )
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label>请输入要做的事情</label>
                    <hr/>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>添加</button>
                    <ul>
                        {this.getTodoItem()}
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default TodoList;