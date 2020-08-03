import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
    const defaultValues = {
        titulo: '',
        descricao: '',
        cor: '',
    };
    
    const { values, handleChange, clearForm } = useForm(defaultValues);
    
    const [categorias, setCategorias] = useState([]);
    
    
    useEffect( () => {
        const URL = 'https://imersao-react-fake-backend.herokuapp.com/categorias';
        fetch(URL)
            .then(async (resp) => {
                console.log(resp);
                const respJson = await resp.json();
                console.log(respJson);
                setCategorias([
                   ...respJson, 
                ]);
            });
    }, []);
    
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
                
            <form onSubmit={e => {
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                
                clearForm();
            }}
            >
            
                <FormField
                    label="Nome"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                
                <FormField
                    label="Descricao"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                
                <Button>
                    Cadastrar
                </Button>
            </form>
            
            <br/>
            
            <ul>
                {categorias.map(categoria => <li key={categoria.id}>{categoria.titulo}</li>)}
            </ul>
            
            <br/>
            
            <Link to="/">
                Ir para a Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;