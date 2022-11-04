import {useState, useRef} from 'react'
import style from './DetailQuestionAndResponse.module.css'
import { useSelector,useDispatch } from 'react-redux'
import {createQuestion} from '../../../../redux/slice/sliceProducts'
import {FaQuestion} from 'react-icons/fa'

export default function DetailQuestionAndResponse() {
    const [allQuestion,setAllQuestion] = useState(5)
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido).toISOString();//usalo cuando necesitas responser a la pregunta
    const dispatch = useDispatch()
    const inputValue = useRef()
    const questionArray = useSelector(state => state.products.question)
    const question = questionArray.slice(0,allQuestion)
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
        {question.length>0 && <ul className={style.suContainerUl}>
            {question.map((e,i)=>{  
                return <li key={i}>
                         <p className={style.question}><FaQuestion color='#3483fa'/> {e.question}</p>
                         <div className={style.response}>
                            <p><span>{e.response}  </span>  {e.date.split("T")[0]}</p>
                         </div>
                       </li>
            })}
       { questionArray.length - question.length !==0 &&<li onClick={()=>setAllQuestion(questionArray.length)}><p className={style.results}>Ver {questionArray.length - question.length } resultado más</p></li> }
        </ul>}
    </div>
  )
}
