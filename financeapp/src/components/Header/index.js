import React from 'react';
import * as C from "./styles";
import { FaSignOutAlt } from 'react-icons/fa';
import { TransparentButton } from './styles';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (

        <C.Container>
            <div>
                {/* Ícone do aplicativo */}
                <img src={logo} alt="Logo" width={150} />
            </div>
            <div>

                <C.TransparentButton>
                    <Link to="/Home"><strong>Inicio</strong></Link>
                </C.TransparentButton>

                <C.TransparentButton>
                    <Link to="/LancamentoDespesa"><strong>Despesas</strong></Link>
                </C.TransparentButton>

                <C.TransparentButton>
                    <strong>Receitas</strong>
                </C.TransparentButton>

                <C.TransparentButton>
                    <strong>Conciliação</strong>
                </C.TransparentButton>

                <C.TransparentButton>
                    <strong>Relatórios</strong>
                </C.TransparentButton>


                {/* Botão de Logout */}

                <C.ButtonLogout>

                    <FaSignOutAlt /> Sair

                </C.ButtonLogout>


            </div>
        </C.Container>
    );
};

export default Header;
