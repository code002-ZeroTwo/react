import Todos from './Todos';

function TodoList({props,toggle}){
    return (
        props.map(todo => {
            return <Todos key={todo.id} todo={todo} toggle = {toggle} />;
        })
    );
}

export default TodoList;