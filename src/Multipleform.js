import React,{ useState } from 'react';

const Multipleform = () => {

    const [details, setdetails] = useState({
        name : '',
        address : '',
        num : ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert( `${details.name} ${details.address} `);
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        //setdetails me ek callback function define kr rhe he
        setdetails((preVal) => {
           // console.log(preVal)
           return {
               ...preVal,
               [name] : value
           }
        });
        }
    return (
        <>
        <h1>FORM FOR MULTIPLE INPUT VALUES</h1>
        <h2>Hello {details.name} //  {details.address}  // {details.num} </h2>
        <form onSubmit={handleSubmit}>

        <lable id="name">Name :</lable>
        <input type="text" name="name" onChange={ handleInputChange}/>
        <hr/>
        <lable id="address">Address :</lable>
        <input type="textarea" name="address" onChange={ handleInputChange}/>
        <hr/>
        <lable id="num">Phone Number :</lable>
        <input type="number" name="num" onChange={ handleInputChange}/>
        <hr/>
        <input type="submit" />
        </form>
        </>
    );
}

export default Multipleform;