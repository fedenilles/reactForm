import { useState } from "react";

const useFormulario = (inicial) => {
    const [formulario, setFormaulario] = useState(inicial)
      const handleChange = (e) => {
        setFormaulario({
            ...formulario,
            [e.target.name] : e.target.value
        })    
    
      }
    const reset = () => {
      setFormaulario(inicial)
    }
    return[formulario, handleChange, reset]
}

export default useFormulario