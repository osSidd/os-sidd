import { useState } from "react"

export default function useMessage(){

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        message:''
    })

    const [sending, setSending] = useState(false)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(false)

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    function hideMessage(){
        setTimeout(() => {
            setStatus(false)
        }, 3000)
    }

    async function handleSubmit(e){

        setSending(true)
        setStatus(false)

        e.preventDefault()
        
        const res = await fetch(import.meta.env.VITE_URI, 
            {
                method:'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
        )

        const data = await res.json()

        if(res.ok){
            setSending(false)
            setFormData({
                name: '',
                email: '',
                message: ''
            })
            setStatus(true)
            hideMessage()
        }
        else{
            setMessage(data.status)
            setStatus(true)
        }

        setMessage(data.status)
    }

    return {
        message,
        status,
        formData,
        sending,
        handleChange,
        handleSubmit
    }
}