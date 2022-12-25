import { useEffect } from "react";
import { useState } from "react";
import Forma from "./components/Forma";
import MainText from "./components/MainText";
import MessegesList from "./components/MessegesList";
import './styles/App.css';






function App() {
  const [msges, setMsges] = useState([]);

  const addMesseges = (newMsges) => {
    setMsges([...msges, newMsges])
  }

  useEffect(() => {

    if (msges.length > 0 && msges[msges.length - 1].autor === 'user') {
      const timeout = setTimeout(() => {
        addMesseges({
          autor: 'bot',
          text: 'Ваше сообщение очень важно для нас'

        })
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [msges])


  return (
    <>
      <h1>Welcome to chat</h1>
      <hr />
      <Forma addMesseges={addMesseges} />
      <hr />
      <MessegesList messeges={msges} />

    </>
  )
};




export default App;
