import React from "react";
import styled from "styled-components"
import { useState } from 'react'

const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.borderBase};
    max-width: 425px;
    width: 100%;
    border-radius: 2px;
    overflow: hidden;
    
    input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
    }
    button {
        flex: 1; 
        cursor: pointer; 
        border: none; 
        background-color: ${({ theme }) => theme.backgroundLevel2}; 
        box-shadow: 0 1px rgb(0 0 0  / 10%); 
        border-left: 1px solid ${({ theme }) =>  theme.borderBase}; 
        width: 4px; 
        height: 40px; 
            
        @media (min-width: 600px) { 
            width: 64px; 
            height: 40px;
        }
    }
`;


export default function Search({setValorDoFiltro, valorDoFiltro}){
    return(
        <StyledSearch>
            <input 
                type="text" 
                placeholder="Pesquisar"  
                onChange={(e) => setValorDoFiltro(e.target.value)}
                value={valorDoFiltro}
                />
                
            <button>
                🕵️
            </button>
        </StyledSearch>
    )
}
