import React from 'react';
import styled from 'styled-components';


export default function Dashboard() {
    return (
        < div className="main">
        
            
                <Dashboardlist className="bg-white" >
                    <Imagecontainer className="d-flex justify-content-center align-items-center   ">
                        <img src="img\avatar1.png" class=" img-responsive pt-3 " style={{ height: 20 + 'em', width: 20 + 'em' }} alt="..." />
                    </Imagecontainer>
                    <div className="text-center mt-4  ">


                        <h1 className=" p-5"><strong>Set Up Your Store </strong></h1>

                    </div>
                </Dashboardlist>
            
 


        </div>
    )
}
const Dashboardlist = styled.div`
padding:50px;

`;

const Imagecontainer =styled.div`
margin-top:8rem;


`;