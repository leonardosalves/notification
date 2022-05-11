import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import './App.css'
import './style.css'

const notify = () => toast('Bem vindo meu amigo, o Senhor é contigo.')
const success = () => toast.success('Você foi aprovado, parabéns!',
  {
    iconTheme:{
      primary: 'orange',
      secondary: 'black'
    }
  }
)
const error = () => toast.error('Errais pois não conhecer as escrituras e nem o poder de Deus!',{
  icon:"",
  iconTheme:{
    primary: 'black',
    secondary: 'white'
  }
})
const bigToast = () => toast(
 `Não andeis ansiosos por coisa alguma; antes em tudo sejam os vossos pedidos conhecidos
 \ndiante de Deus pela oração e súplica com ações de graças;
 \ne a paz de Deus, que excede todo o entendimento, guardará os vossos corações
 \ne os vossos pensamentos em Cristo Jesus.`,
 {
   duration: 4000
 }
)
const test = () => toast("Somente um teste", 
{
  duration: 4000,
  position: 'top-center',
  style:{},
  className: '',
  icon: "👏",
  iconTheme:{
    primary: '#000',
    secondary: '#fff'
  },
  style:{
    border: "1px solid red" ,
    padding: "5px",
    color: "red"
  },
  ariaProps:{
    role: 'status',
    'aria-live' : 'polite'
  }
}
)
const themedToast = () => toast(
  "Leia a bíblia!",{
    style:{
      border: "1px solid green",
      padding: "16px",
      color: "green"
    }
  }
)
const  darkToast = () => toast(
  "Glória a Deus!!!",{
    icon: "✝️",
    style:{
      borderRadius: '12px',
      background: '#333',
      color: '#fff'
    },
    position: 'bottom-center'
  }
) 

function App(){
    return(
      <>
        <div className='notificationContainer'>
          <p>Toasting Notification</p>{" "}
          <button onClick={notify}>Notificação</button>{" "}
          <button onClick={success}>Sucesso</button>{" "}
          <button onClick={error}>Erro</button>{" "}
          <button onClick={bigToast}>Toast Grande</button>{" "}
          <button onClick={themedToast}>Toast estilizado</button>{" "}
          <button onClick={darkToast}>Toast com ícone</button>{" "}
          <button onClick={test}>Teste</button>{" "}
        </div>{" "}
        <Toaster position='top-center' reverseOrder={true} />
      </>
    )
}

export default App