import React, { useState } from 'react';
import * as C from "./styles";
import logo from './logo.png';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

export const Header = () => {

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => {
                Navigate('/home')
                console.log('Navegar para Home');
            },
        },
        {
            label: 'Despesa',
            icon: 'pi pi-fw pi-money-bill',
            items: [
                {
                    label: 'Opção 1',
                    command: () => {
                        console.log('Despesas Option 1 clicked');
                    }
                },
                {
                    label: 'Opção 2',
                    command: () => {
                        console.log('Despesas Option 2 clicked');
                    }
                }
            ],
        },
        {
            label: 'Receita',
            icon: 'pi pi-fw pi-dollar',
            items: [
                {
                    label: 'Opção 1',
                    command: () => {
                        console.log('Despesas Option 1 clicked');
                    }
                },
                {
                    label: 'Opção 2',
                    command: () => {
                        console.log('Despesas Option 2 clicked');
                    }
                }
            ],
        },
    ];

    const start = (
        <img
            alt="Logo"
            src={logo}
            onError={(e) => (e.target.src = 'fallback/icon.png')}
            style={{ width: '150px', height: '60px' }}

        />
    );

    const end = [
        {
            label: 'Config',
            icon: 'pi pi-fw pi-dollar',
            items: [
                {
                    label: 'Opção 1',
                    command: () => {
                        console.log('Despesas Option 1 clicked');
                    }
                },]
        }
    ]

    return (

        <div id='menubar' className="p-d-flex p-jc-between p-ai-center">
            <Menubar
                start={start}
                model={items}
                end={end}
            // end={
            //     <Button
            //         label="Configurações"
            //         icon="pi pi-cog"
            //         className="p-button-text"
            //         onClick={() => console.log('Abrir configurações')}
            //     />
            // }
            />
        </div>

    );
};

export default Header;
