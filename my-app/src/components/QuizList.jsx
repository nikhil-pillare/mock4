import { Box, Button, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export const Quizlist = () => {
    const [totaldata, settotaldata] = useState(0)
    const [sernum, setsernum] = useState(1)

    const navigate = useNavigate()
    const store = useSelector((store) => store.reducer)
    console.log(store.data[0])
    useEffect(() => {
        settotaldata(store.data.length)
    }, [sernum])

    function handlesubmit(e) {
        if(e.target.value ==store.data[sernum - 1].correct_answer){
            e.target.style.backgroundColor = "green"
            e.target.style.color = "black"
            setTimeout(() => {
                setsernum(sernum+1)
                e.target.style.backgroundColor="white"
                e.target.style.color = "black"
            }, 1000)
          
           
        }
        else{
            e.target.style.backgroundColor = "red"
            e.target.style.color = "white"
            setTimeout(() => {
                setsernum(sernum + 1)
                e.target.style.backgroundColor="white"
                e.target.style.color = "black"
            }, 1000);

            
        }
    }

    function handlesub() {
        navigate("/result")
    }
    return <Box w={"80%"}>

        <br />
        <Box border={'2px solid white'} padding={'10px 10px'}>
            <Text>{sernum}. {store.data[sernum - 1].question}</Text>
            <br />
            <Button value={store.data[sernum - 1].correct_answer} 
            backgroundColor={"white"} onClick={(e) => handlesubmit(e)} w={'100%'}  _hover={{color: 'green', backgroundColor: 'white'}} color={'black'} border={'1px solid gray'}>{store.data[sernum - 1].correct_answer}</Button>
            {store.data[sernum - 1].incorrect_answers.map((item, index) => {
                return <Box >
                    <br />
                    <Button value={item} backgroundColor={"white"} onClick={(e) => handlesubmit(e)} w={'100%'} _hover={{ color: 'green', backgroundColor: 'white'}} color={'black'} border={'1px solid gray'}>{item}</Button>
                </Box>
            })}

        </Box>
        <br />
        <Box display={"flex"} justifyContent={"space-around"}>
        <button disabled={sernum == 1} onClick={()=>setsernum(sernum-1)} style={{ backgroundColor: 'white', borderRadius: '7px', color: 'black' }}> Previous</button>
        <button style={{ backgroundColor: 'white', borderRadius: '7px', color: 'black', margin: '20px 20px' }}>{sernum}</button>

        <button onClick={sernum == totaldata ? handlesub : () => setsernum(sernum + 1)} style={{backgroundColor: 'white', color: 'black' }}>{sernum == totaldata ? "Submit" : "Next Question"}</button>
        </Box>
        


    </Box>
}