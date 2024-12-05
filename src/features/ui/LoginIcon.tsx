import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown } from '@mui/base/Dropdown'
import { Menu, MenuListboxSlotProps } from '@mui/base/Menu'
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton'
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem'
import { styled } from '@mui/system'
import { CssTransition } from '@mui/base/Transitions'
import { PopupContext } from '@mui/base/Unstable_Popup'
import { IoMdLogIn } from 'react-icons/io'
import { IoIosLogOut } from 'react-icons/io'
import toast from 'react-hot-toast'
import { CgProfile } from 'react-icons/cg'
import useUser from '../../authentication/useUser'

interface LoginIconProps {
  isLoggedIn: boolean
  onLogout: () => void
}

const LoginIcon: React.FC<LoginIconProps> = ({ isLoggedIn, onLogout }) => {
  const { user } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('userId')

    onLogout()
    toast(`See you next time, ${user?.name.firstname} 👋`)
    navigate('/')
  }

  return (
    <div className="">
      {isLoggedIn ? (
        <Dropdown>
          <MenuButton className=" sm:btn btn-primary rounded-[7px] text-secondary-0">
            <div className="flex items-center gap-x-2 ">
              <CgProfile className="w-5 h-5" />
              <span> Hi {user?.name.firstname} !</span>
            </div>
          </MenuButton>
          <Menu slots={{ listbox: AnimatedListbox }} className="z-[1000]">
            <Link to="/profile">
              <MenuItem>Your Profile</MenuItem>
            </Link>

            <MenuItem onClick={handleLogout}>
              <div className="flex justify-between">
                Log out
                <IoIosLogOut className="sm:w-5 sm:h-5 w-2 h-2" />
              </div>
            </MenuItem>
          </Menu>
        </Dropdown>
      ) : (
        <Link to="/auth">
          <div className="text-textColor flex gap-x-1 justify-center items-center sm:btn btn-primary rounded-[7px] ">
            <span className="text-secondary-0 text-sm md:text-xl">Login</span>
            <IoMdLogIn className="w-5 h-5 text-secondary-0" />
          </div>
        </Link>
      )}
    </div>
  )
}

export default LoginIcon

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
}

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[200]
  };
  z-index: 30;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `
)

const AnimatedListbox = React.forwardRef(function AnimatedListbox(
  props: MenuListboxSlotProps,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const { ownerState, ...other } = props
  const popupContext = React.useContext(PopupContext)

  if (popupContext == null) {
    throw new Error(
      'The `AnimatedListbox` component cannot be rendered outside a `Popup` component'
    )
  }

  const verticalPlacement = popupContext.placement.split('-')[0]

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  )
})

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  

  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }
  `
)

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);


  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === 'dark' ? blue[300] : blue[200]
    };
    outline: none;
  }
  `
)
