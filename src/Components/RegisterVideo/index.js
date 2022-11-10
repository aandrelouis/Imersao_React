import { useState } from 'react';
import { StyledRegisterVideo } from './styles';


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




export default function RegisterVideo(){
   const [formVisible, setFormVisible] = useState(false);
 
   const formCadastro = useForm({
        initialValues: {
            title: 'Frost',
            url: 'https://www.youtube.com/watch?v=Q8t9tU2TgkI',
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
                    setFormVisible(!formVisible);
                    formCadastro.clearForm();
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