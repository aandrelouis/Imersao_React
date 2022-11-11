import { useState } from 'react';
import { StyledRegisterVideo } from './styles';
import { createClient } from '@supabase/supabase-js'


//get youtube thumbnail from video url
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`;
}


function useForm(propsDoForm) {
    const [values, setValue] = useState(propsDoForm.initialValues);
    
    return{
        values,
        handleChange:  (e) => {
            const name = e.target.name;            
                setValue({
                ...values,
                [name]: e.target.value, 
                })
            },

        clearForm: () => {
            setValue({});
        }
        
    };
}


const PROJECT_URL = "https://wztzctjdfzteximxvdki.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6dHpjdGpkZnp0ZXhpbXh2ZGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMTE1MjAsImV4cCI6MTk4MzY4NzUyMH0.jG51roXIdMNeIyXV1l8aRjxRMAqZI2UPOI2FayomKqk"
const supabase = createClient(PROJECT_URL, API_KEY);


export default function RegisterVideo(){
   const [formVisible, setFormVisible] = useState(false);
 
   const formCadastro = useForm({
        initialValues: {
            title: 'Frost',
            url: 'https://www.youtube.com/watch?v=QsqatJxAUtk',
        },
   });
   
    return( 
        <StyledRegisterVideo>
            <button className='add-video' onClick={() => setFormVisible(!formVisible)}>
                +
            </button>
           {formVisible ? (

                <form onSubmit={(e) => { 
                    e.preventDefault();
                    
                    
                    supabase.from('video').insert({
                        title: formCadastro.values.title,
                        url: formCadastro.values.url,
                        thumb: getThumbnail(formCadastro.values.url),
                        playlist: "Jogos",
                    }).then((res) => {
                        console.log(res);
                        formCadastro.clearForm();
                    }).catch((err) => {
                        console.log(err);
                    });

                    
                    setFormVisible(!formVisible);
                }}>
                    <div>
                    <button type='button' className='close-modal' onClick={() => setFormVisible(!formVisible) }>
                        X
                    </button>
                    <input 
                        placeholder='titulo do video' 
                        name='title'
                        value={formCadastro.values.title}
                        onChange={formCadastro.handleChange}
                        />
                    <input 
                        placeholder='URL' 
                        name='url'
                        value={formCadastro.values.url}
                        onChange={formCadastro.handleChange}
                        />
                    <button
                        type='submit'
                    >
                        Cadastrar
                    </button>
                    </div>
                </form>) 
                
                : false}
        </StyledRegisterVideo>
    )
}