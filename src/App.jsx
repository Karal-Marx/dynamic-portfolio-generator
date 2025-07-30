import { useNavigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ChooseTemplate from "./components/ChooseTemplate"
import Form from './components/Form'
import Preview from "./components/Preview";
import PortfolioWithTemplate from "./components/PortfolioWithTemplate";


export default function App() {
  const [templateChoice, setTemplateChoice] = useState("")
  const [formData, setFormData] = useState(null)
  const navigate = useNavigate();

  const handleChooseTemplate=(templateOption)=>{
    setTemplateChoice(templateOption);
    navigate('/form');
  }

  const handleFormSubmit=(data)=> {
    setFormData(data);
    navigate('/preview');
  }

  const handlePreviewClick = () => {
    navigate('/portfolio')
  }


  return (
    <>
        <Routes>
          <Route path='/' element={<ChooseTemplate onSubmit={handleChooseTemplate}/>}/>
          <Route path='/form' element={<Form onSubmit={handleFormSubmit} />}/>
          <Route path="/preview" element={<Preview formData={formData} onSubmit={handlePreviewClick}/>} />
          <Route path="/portfolio" element={<PortfolioWithTemplate formData={formData} templateOption={templateChoice}/>} />
          
        </Routes>
        
    </>
  )
  
}