import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import useLocalStorage from 'use-local-storage';
import { FC } from 'react';

const Header: FC<{
    switchFunction: () => void,
    currentTheme: string,
}> = (props) => {
    const {switchFunction, currentTheme} = props

    return (
        <div className="header-position">
            <div className="header-container">
                <div className="header-title">
                    Hana N. Fatinah
                </div>
                <div>
                    <button className="mode-switch" onClick={switchFunction}>
                        <FontAwesomeIcon icon={currentTheme === 'light' ? faMoon : faSun} className="mode-switch-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Header;