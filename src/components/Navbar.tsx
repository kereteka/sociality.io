import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { firmState } from '../features/firm/firmSlice';
import Logo from './Logo';



const Navbar = () => {

  const [isFirmSelected, setIsFirmSelected] = useState()
  const [showNav, setShowNav] = useState(false)
  const nav = [
    { Notification: ["a", "b"], display: false },
    { Summary: [], display: false },
    { Publish: ["Compose", "Feed"], display: false },
    { Engage: [], display: false },
    { Listen: [], display: false },
    { Report: [], display: false }
  ]

  const firms = [
    { "id": 0, "name": "lor", "link": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F579%2F037%2Foriginal%2Fstar-logo-template-vector-icon-illustration-design.jpg&f=1&nofb=1&ipt=7f0deeb43d8decc28513424375259ff4ae180ae55e3a77ecd8ef900998943290&ipo=images" },
    { "id": 1, "name": "uraya", "link": "sdds" }
  ]

  const [newNav, setNewNav] = useState([...nav])

  const dispatch = useAppDispatch();
  const firm = useAppSelector((state) => state.firm)

  console.log(firm, 'status yeni')


  const handleClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, index: number) => {
    const showElement = [...nav];
    showElement[index].display = !showElement[index].display;
    setNewNav(showElement);
  };
  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setShowNav(false)}>
        <div onClick={() => setShowNav(true)} className=" fixed top-0 left-0 w-10 h-10 bg-cover bg-[url('https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png')] "></div>
        <div className={"fixed h-full top-0 left-0  z-50 md:translate-x-0 origin-top-right duration-300 transition-all " + (showNav == false ? ' -translate-x-full ' : ' ')}>
          <div className='fixed pl-1.5 h-full bg-[#2A2F33] w-12 '>
            <Logo />
            {firms.map((firm, firmIndex) =>
              <div key={firmIndex} onClick={() => { console.log(firm.id); dispatch(firmState(firm.id)); setIsFirmSelected(firmIndex) }}
                className={isFirmSelected === firmIndex ? ` mt-2 ml-1 w-8 h-7 rounded-md bg-contain bg-[url('https://static.vecteezy.com/system/resources/previews/000/612/325/original/star-logo-template-vector-icon-illustration-design.jpg')]  before:content-[""] before:bg-[#F55560] before:rounded-r-md before:inline-block before:w-1 before:h-7 before:-ml-2 cursor-pointer  ` : "cursor-pointer  mt-2  ml-1 w-8 h-7 rounded-md bg-contain bg-[url('https://static.vecteezy.com/system/resources/previews/000/612/325/original/star-logo-template-vector-icon-illustration-design.jpg')] "}>
              </div>
            )}
          </div>


          <div className='uppercase h-full bg-[#393D41] text-white pt-14 ml-3 w-48'>
            {newNav.map((item, index) =>
              Object.keys(item).map((element) => (
                <div className='ml-9 cursor-pointer '>
                  <p className='w-full pt-1 '>
                    {element !== "display" && (
                      <div className='w-full'>
                        <p onClick={(e) => handleClick(e, index)} className={item.display === true ? "bg-[#F55560] bg-cover p-1.5" : ''} >{element}</p>
                        {item.display === true &&
                          item[element].map((content) => <li className='bg-[#32363A] capitalize pl-4 pt-1.5 pb-1.5'>{content}</li>)}
                      </div>
                    )}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </OutsideClickHandler>
    </>
  )
}

export default Navbar