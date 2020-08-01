import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);
    const [novaCategoria, setNovaCategoria] = useState({
        nome: '',
        descricao: '',
        cor: ''
    });
    
    function setValue(key, value){
        setNovaCategoria({
            ...novaCategoria,
            [key]: value,
        });
    }
    
    function handleChange(e) {
        setValue(e.target.getAttribute('name'), e.target.value);
    }
    
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
                
            <form onSubmit={e => {
                    e.preventDefault();
                    setCategorias([
                        ...categorias,
                        novaCategoria
                    ]);
                }
            }>
            
                <FormField
                    label="Nome"
                    type="text"
                    name="nome"
                    value={novaCategoria.nome}
                    onChange={handleChange}
                />
                <FormField
                    label="Descricao"
                    type="textarea"
                    name="descricao"
                    value={novaCategoria.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={novaCategoria.cor}
                    onChange={handleChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>
            
            <br/>
            
            <ul>
                {categorias.map(categoria => <li key={categoria.nome}>{categoria.nome}</li>)}
            </ul>
            
            <br/>
            
            <Link to="/">
                Ir para a Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;