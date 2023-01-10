import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../redux/actions';
import { todoListSelector, searchTextSelector } from '../../redux/selectors';
import Todo from '../Todo';

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');
    const todoList = useSelector(todoListSelector);
    const searchText = useSelector(searchTextSelector);
    const inputRef = useRef();

    console.log(searchText);

    const dispatch = useDispatch();
    const handleAddTodo = () => {
        dispatch(addTodo({
            id: uuidv4(),
            name: todoName,
            priority: priority,
            completed: false,
        }))
        setTodoName('');
        setPriority('Medium');
        inputRef.current.focus();
    }

    const handleInputOnChange = (e) => {
        setTodoName(e.target.value)
    }

    // chỉ riêng select antd thì mới in ra thẳng kết quả, ko cần e.target.value
    const handleSelectPriority = (value) => {
        setPriority(value)
    }

    // // save local storage
    // const [job, setJob] = useState(
    //     // vào localStorage lấy dữ liệu( dạng chuỗi JSON) và biến nó thành 1 đối tượng
    //     () => JSON.parse(localStorage.getItem('job')) || [])
    // useEffect(() => {
    //     // tại local thì phải gán nó vào key là job, và biến đổi nó thành chuỗi JSON
    //     localStorage.setItem('job', JSON.stringify(job))
    // }, [job])


    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {
                    todoList.map(
                        todo => <Todo key={todo.id} name={todo.name} priority={todo.priority} />)
                }
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input ref={inputRef} value={todoName} onChange={handleInputOnChange} />
                    <Select defaultValue="Medium" value={priority} onChange={handleSelectPriority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}