
const Form = ({ addTodo }) => {
    const [value, setValue] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input-field"
                placeholder="Add to do..."
                value={value}
                onChange={(e) => handleChange(e)}
            />
        </form>
    )
}