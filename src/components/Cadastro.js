import React, { useState } from "react";
import InputMask from 'react-input-mask';
import InsertImgArrays from './InsertImgArrays';
import { useSelector, useDispatch  } from 'react-redux';
import CurrencyInput from 'react-currency-masked-input'



export default  function Cadastro() {

    const op = [false, false , false, false];
    const dispatch = useDispatch();

    function setNome(e){
      dispatch({type: 'UPDATE_NOME', nome: e.target.value})
    }

    function setAno(e){
      dispatch({type: 'UPDATE_ANO', ano: e.target.value})
    }

    function setModelo(e){
      dispatch({type: 'UPDATE_MODELO', modelo: e.target.value})
    }

    function setMarca(e){
      dispatch({type: 'UPDATE_MARCA', marca: e.target.value})
    }

    function setOpcoes(e, i){
      op[i] = e.target.checked;
      dispatch({type: 'UPDATE_OPCOES', opcoes: op})
    }

    function setDescricao(e){
      dispatch({type: 'UPDATE_DESCRICAO', descricao: e.target.value})
    }

    function setPeso(e){
      dispatch({type: 'UPDATE_PESO', peso: e.target.value})
    }

    function setComprimento(e){
      dispatch({type: 'UPDATE_COMPRIMENTO', comprimento: e.target.value})
    }

    function setLargura(e){
      dispatch({type: 'UPDATE_LARGURA', largura: e.target.value})
    }

    function setAltura(e){
      dispatch({type: 'UPDATE_ALTURA', altura: e.target.value})
    }

    function setPreco(e){
      dispatch({type: 'UPDATE_PRECO', preco: e.target.value})
    }


    return (
      <div className="md:mx-auto teste">
        <div className="grid grid-cols-1 md:grid-cols-1">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input type="text"  onChange={(e) => {setNome(e)}} className="focus:ring-blue-400 focus:border-blue-400 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Modelo
            </label>
            <select onChange={(e) => {setModelo(e);}} autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm">
                  <option>Tratores</option>
                  <option>Retroescavadeiras</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marca
            </label>
            <select onChange={(e) => {setMarca(e);}} autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm">
                  <option>John Deere</option>
                  <option>Valtra</option>
                  <option>Case</option>
                  <option>Agrale</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ano
            </label>
            <input onChange={(e) => {setAno(e)}}  type="text" className="focus:ring-blue-400 focus:border-blue-400 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="2010" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Opções
            </label>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input onChange={(e) => {setOpcoes(e, 0)}} type="checkbox" className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="comments" className="font-medium text-gray-700">Ponto de içamento</label>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
              <input onChange={(e) => {setOpcoes(e, 1)}} type="checkbox" className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="candidates" className="font-medium text-gray-700">Perfuradora</label>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
              <input onChange={(e) => {setOpcoes(e, 2)}} type="checkbox" className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">Pulverizador</label>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
              <input onChange={(e) => {setOpcoes(e, 3)}} type="checkbox" className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">Rompedor Hidráulico</label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descrição do equipamento
            </label>
            <input onChange={(e) => {setDescricao(e)}}  type="text" className="focus:ring-blue-400 focus:border-blue-400 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Descrição" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
                  Peso (Kg)
            </label>
            <CurrencyInput onChange={(e) => {setAno(e)}}  type="number" className="focus:ring-blue-400 focus:border-blue-400 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="0,00" />
          </div>



          <div>
            <label className="block text-sm font-medium text-gray-700">
                Comprimento (m)
            </label>
            <CurrencyInput  onChange={(e) => {setComprimento(e)}}  type="number" className="focus:ring-blue-400 focus:border-blue-400 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="0,00" />
          </div>
     

          <div>
            <label className="block text-sm font-medium text-gray-700">
                Largura (m)
            </label>
            <CurrencyInput onChange={(e) => {setLargura(e)}} type="number" className="focus:ring-blue-400 focus:border-blue-400 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="0,00" />
          </div>
   

          
        <div>
          <label className="block text-sm font-medium text-gray-700">
              Altura (m)
          </label>
          <CurrencyInput onChange={(e) => {setAltura(e)}}  type="number" className="focus:ring-blue-400 focus:border-blue-400 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="0,00" />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700">
                Preço da máquina (R$)
          </label>
          <CurrencyInput placeholder="R$ 0,00" type="number" onChange={(e) => {setPreco(e)}} className="focus:ring-blue-400 focus:border-blue-400 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
        </div>
            


          
          <InsertImgArrays />
          
        </div>
      </div>
    );
  
  }

