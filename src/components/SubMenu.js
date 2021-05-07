import React, { useState,useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SubMenu({ item, isSidebarOpen }) {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)

    return (
        <>


            <SidebarLink className="d-flex justify-content-between align-items-center " to={item.path} onClick={item.subNav && showSubnav}>
                <div className="ml-3">
                    {item.icon}
                    {
                        isSidebarOpen && <SidebarLabel>{item.title}</SidebarLabel>
                    }

                </div>
                {isSidebarOpen&&
                <div> {item.subNav && subnav
                    ? item.iconOpened :
                    item.subNav ? item.iconClosed :
                        null}
                </div>}
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {

                return (
                    <DropdownLink  isSidebarOpen={isSidebarOpen}className="d-flex align-items-center text-decoration-none " to={item.path} key={index}>{item.icon}
                        <SidebarLabel >{item.title}</SidebarLabel>
                    </DropdownLink>

                )
            })}
        </>
    );
};

const SidebarLink = styled(Link)`
color: var(--mainBlue);
list-style:none;
height:65px;
 font-size:20px;
 font-weight:10px;
 
 &:hover{ 
    
     border-right:5px solid #FFE580;
     cursor:pointer;
     text-decoration:none;
     color: var(--mainBlack);
     background-color: var(--mainGray);
     
 }
  

 }
`;
const SidebarLabel = styled.span`
margin-left:10px;
display-:${p => p.isSidebarOpen ? 'inline' : 'none'};

`; 
const DropdownLink = styled(Link)`
background: var(--mainGray);
height:40px;
color: var(--mainBlue) !important;
font-size:14px;
 ${p => p.isSidebarOpen && 'padding-left:15%'};
 ${p => !p.isSidebarOpen && 'text-align:start'};
&:hover{
    background: var(--mainYellow) !important;
    cursor:pointer;
    border-right:5px solid grey;

}
`;