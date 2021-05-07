import React from 'react'
import styled from 'styled-components';


export default function Allproducts() {
    return (


        < div className="main">
            <Allproductpage className="bg-white" >
                <div className="d-flex justify-content-start pt-5 py-4 pl-3 pr-3"> <h5><strong>Products</strong></h5></div>
                <form className=" d-flex justify-content-start pl-3 m-2 ">
        

                        <Formlink className="form">

                            <div class="input-group">

                                <input type="text" name="" class=" form-control input_user" value="" placeholder="search.." />
                                <div class="input-group-append">
                                    <span class="input-group-text  text-warning  bg-dark rounded-right "><i class="fas fa-search "></i></span>
                                </div>
                            </div>


                        </Formlink>
                

                </form>


                <Imagecontainer className="d-flex justify-content-center align-items-center   ">
                        <img src="..\img\avatar2.png" class=" img-responsive pt-3 " style={{ height: 17 + 'em', width: 17 + 'em' }} alt="..." />
                    </Imagecontainer>
                    <div className="text-center   ">


                        <h1 className=" p-3"><strong>Add and manage your products </strong></h1>
                        <p> This is where you'll add your products and manage <br/> pricing. Yout can also import and export your <br/> product inventory</p>
                    </div>
            </Allproductpage>
        </ div>
    )
};
const Allproductpage = styled.div`
  
 
 
 `;
const Formlink = styled.div`
width:45%;


`;

const Imagecontainer =styled.div`
margin-top:8rem;
`;