import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu'



export default function Sidebar() {


    const [isSidebarOpen, setSidebarstate] = useState(true)

useEffect(()=>{
    const updateWindowWidth =()=>{
if(window.innerWidth <1200 && isSidebarOpen) setSidebarstate(false);
    else setSidebarstate(true)
}
window.addEventListener('resize', updateWindowWidth);
return ()=> window.removeEventListener('resize',updateWindowWidth);
},[isSidebarOpen])





    return (
        <>

            <SidebarNav isSidebarOpen={isSidebarOpen} className="d-flex justify-content-center  " >

                <SidebarWrap>
                    <Togglecontainer onClick={() => setSidebarstate(!isSidebarOpen)}>
                        <Toggle className="d-flex justify-content-flex-start align-item-center  "><FaIcons.FaBars /></Toggle>
                    </Togglecontainer>


                    <div >
                        <h3> <strong className="d-flex justify-content-end p-2  ml-3 mr-2 mt-5 mb-4 border-bottom border-white ">JUVANGI</strong></h3>
                    </div>
                    {SidebarData.map((item, index) => {


                        return <SubMenu isSidebarOpen={isSidebarOpen} item={item} key={index} />;
                    })}
                    <Link className="d-flex justify-content-flex-center align-items-center ml-3 mt-5 pt-5 text-dark text-decoration-none "  >
                        <FiIcons.FiLogOut />
                        {
                            isSidebarOpen && <strong className="p-2 ">LOG OUT</strong>
                        }

                    </Link>
                </SidebarWrap>

            </SidebarNav>


        </>

    )
};



const SidebarNav = styled.div`
background: var(--lightGray) !important ;
width:${p => p.isSidebarOpen ? '20%' : '5%'};
max-width:280px;
min-width:80px;
height:100vh;
position:relative;
top:0;

transition: .2s ease-in all;
z=index : 10;
font-size:1rem;
`;
const SidebarWrap = styled.div`
width:100%;
height:96vh;


`;
const Togglecontainer = styled.div`
width:30%;

margin:5px 20px auto;

`;
const Toggle = styled.div`
 color:var(--mainGray);
 cursor:pointer;
`;
