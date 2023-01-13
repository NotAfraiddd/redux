import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../redux/actions';
import { todoShowResults } from '../../redux/selectors';
import Todo from '../Todo';

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');

    const todoList = useSelector(todoShowResults);
    
    const inputRef = useRef();


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


    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {
                    todoList.map(
                        todo => <Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />)
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