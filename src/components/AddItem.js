import React from 'react';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName: "",
            productPrice: 0,

        };
    }
     
    render() { 
           return (

      <form className="row mb-5 " onSubmit={(e) => {
        e.preventDefault();
        this.props.addItem(this.state.productName, Number(this.state.productPrice));
      }}> 
        <div className="mb-3 col-4">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName" aria-describedby="name"
          name="productName"
          onChange={(e)=> {
            this.setState({productName: Number(e.currentTarget.value)});

          }}
           value={this.state.productName}
          />
         
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="exampleInputPrice" className="form>
          label">Price</label>
          <input type="number" className="form-control" id="Price"
          name="productPrice"
              onChange={(e)=> {
            this.setState({productPrice: e.currentTarget.value});

          }}
          value={this.state.productPrice}
          />
        </div>
       
    
        <button type="submit" className="btn btn-primary col-4" >Add</button>
      </form>
    );
  }
}
 
export default AddItem;