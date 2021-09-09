import React from 'react';

class ClassForm extends React.Component {

    state = [{
        name : '',
        address : '',
        num : ''
    }];
    handleInputChange = (event) => {
        const { name , value } = event.target;
        this.setState({
            [name] : value
        });
    }
    render() {
        return (
            <>
                <h1>FORM FOR MULTIPLE INPUT VALUES</h1>
                <h2>Hello {this.state.name} //  {this.state.address}  // {this.state.num} </h2>
                <form>

                    <lable id="name">Name :</lable>
                    <input type="text" name="name" onChange={this.handleInputChange} />
                    <hr />
                    <lable id="address">Address :</lable>
                    <input type="textarea" name="address" onChange={this.handleInputChange} />
                    <hr />
                    <lable id="num">Phone Number :</lable>
                    <input type="number" name="num" onChange={this.handleInputChange} />
                    <hr />
                    <input type="submit" />
                </form>
            </>
        );
    }
}

export default ClassForm;