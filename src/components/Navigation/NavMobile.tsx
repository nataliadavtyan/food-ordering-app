// import { FC, useState } from "react";
// import styled from "styled-components";
// // import { NavLink } from "react-router-dom";
// import { Pivot as Hamburger } from "hamburger-react";
// import { navRoutes } from "./navRoutes";
// import { NavLink } from "react-router-dom";

// const MobileMenu = styled.div`
//   /* display: flex; */
//   /* flex-direction: column; */
//   /* height: 100%; */
// `;

// const StyledHamburger = styled.div`
//   color: ${(props) => props.theme.color.text};
//   display: block;
//   z-index: 10;

//   @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
//     display: none;
//   }
// `;

// const Navigation = styled.nav`
//   /* add conditional rendering */
//   /* display: block; */
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 100%;
//   max-width: 450px;
//   height: 100%;
//   background-color: lightgray;
//   /* background-color: ${({ theme }) => theme.color.text}; */
//   /* overflow-y: scroll; */
//   overflow: hidden;
//   padding: 5vh 0 5vh 5vw;
//   transform: translateX(100%);

//   ul {
//     color: ${({ open }) => (open ? "red" : "green")};
//     list-style: none;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     gap: 4vh;
//     margin-top: 0.875em;
//     /* color: ${({ theme }) => theme.color.text}; */
//     text-align: left;
//   }
// `;

// const StyledNavLink = styled(NavLink)`
//   text-decoration: none;
//   color: inherit;
//   /* color: white; */
//   font-size: 7vw;
//   font-weight: 400;
//   /* width: 100%; */
// `;

// interface Props {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// }

// export const NavMobile: React.FC<Props> = ({ open, setOpen }) => {
//   // const [open, setOpen] = useState(false);

//   return (
//     // <MobileMenu>
//     <div>
//       <StyledHamburger onClick={() => setOpen(!open)}>
//         {/* <Hamburger toggled={open} toggle={setOpen} /> */}
//         <Hamburger
//           onToggle={(open) => {
//             console.log(open);
//           }}
//         />
//       </StyledHamburger>
//       <Navigation open={open}>
//         <ul>
//           {navRoutes.map((route, i) => (
//             <li>
//               <StyledNavLink to={route.path} key={`nav-${i}`}>
//                 {route.title}
//               </StyledNavLink>
//             </li>
//           ))}
//         </ul>
//       </Navigation>
//     </div>
//     // </MobileMenu>
//   );
// };
