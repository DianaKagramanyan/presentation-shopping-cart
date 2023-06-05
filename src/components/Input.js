import '../styles/Input.css'
const Input = (props) => {
  return (
    <div className="input-group mb-3">
      <input value={props.searchInput}
             onChange={(event) => props.setSearchInput(event.target.value)}
             type="text"
             className="form-control"
             placeholder="Search for product"
             aria-label="Recipient's username with two button addons"/>
    </div>
  );
};

export default Input;
