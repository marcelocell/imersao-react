import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const { handleChange, values} = useForm({
        titulo: '',
        url: '',
        categoriaId: ''
    });
    
    useEffect(() => {
        categoriasRepository
            .getAll()
            .then(resp => setCategorias(resp));
    }, []);
    
    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>
            
            <form onSubmit={e => {
                e.preventDefault();
                videosRepository.create(values).then(() => history.push('/'));
            }}
            >
            
                <FormField
                    label="Titulo"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                
                <FormField
                    label="URL"
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                
                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categorias.map(({ titulo }) => titulo)}
                />
                
                <Button type="submit">
                    Cadastrar
                </Button>
            </form>
            
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;