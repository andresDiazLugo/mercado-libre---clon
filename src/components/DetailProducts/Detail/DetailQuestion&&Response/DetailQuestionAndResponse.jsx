import {useState, useRef} from 'react'
import style from './DetailQuestionAndResponse.module.css'
import { useSelector,useDispatch } from 'react-redux'
import {createQuestion} from '../../../../redux/slice/sliceProducts'

export default function DetailQuestionAndResponse() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido).toISOString();//usalo cuando necesitas responser a la pregunta
    const dispatch = useDispatch()
    const inputValue = useRef()
    const question = useSelector(state => state.products.question)
   const [questions,setQuestions] = useState({
    question:"",
    response:"",
    date:""
   })
   const handleQuestion = (e)=>{
        setQuestions({
            ...questions,
            question:e.target.value
        })
   } 
   const sendQuestion = (e)=>{
    e.preventDefault()
    dispatch(createQuestion(questions))  
    inputValue.current.value= ""
   }

  return (
    <div className={style.container}>
        <div>
            <p className={style.title}>Preguntas y Respuestas</p>
        </div>
        <div>
            <p className={style.subtitle}>Preguntale al vendedor</p>
            <div className={style.input}>
                <input ref={inputValue} onChange={handleQuestion} type="text" placeholder='Escibí tu pregunta...'/>
                <button onClick={sendQuestion}>Preguntar</button>
            </div>
        </div>
        <div>
            <p className={style.subtitle}>Últimas realizadas</p>
        </div>
        <ul className={style.suContainerUl}>
            {question.map(e=>{  
                return <li>
                         <p className={style.question}>{e.question}</p>
                         <div className={style.response}>
                            <p><span>{e.response} {e.date.split("T")[0]}</span> </p>
                         </div>
                       </li>
            })}
        </ul>
    </div>
  )
}
