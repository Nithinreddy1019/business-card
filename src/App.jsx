import { useState } from 'react'
import './App.css'
import Card  from './assets/components/card'

function App() {
  const [count, setCount] = useState(0)

  const personDetails = {
    name: "Nithin",
    description: "Rule yourself",
    socialMedia: [
      {Linkedin: "https://www.linkedin.com/in/nithin-reddy-kethireddy-a40906190"},
      {Twitter: "https://twitter.com/k_nithin33037"}
    ],
    interests: ["Web Development", "ML & AI", "Entreuprenership"]
  } 

  return (
    <>
      <Card name={personDetails.name} description={personDetails.description} socialMedia={personDetails.socialMedia} interests={personDetails.interests}></Card>
    </>
  )
}



export default App
