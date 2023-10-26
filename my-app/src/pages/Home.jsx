import { Box, Button,  FormControl, FormLabel, Heading, Input, Select} from "@chakra-ui/react";
import { useState } from "react";

import { useDispatch , useSelector} from "react-redux";
import { getData } from "../Redux/action";
import { useNavigate } from "react-router-dom";

export const Home=()=>{
    const [name, setname]= useState("");
    const [category, setcategory]= useState("");
    const [difficulty, setdifficulty]= useState("");
    const [limit, setlimit]= useState("");
    const store= useSelector((store)=>store.reducer)
    const dispatch= useDispatch();
    const navigate= useNavigate();


    function handleSubmit(){
        if(name==""|| category==''||difficulty==''|| limit==''){
            alert("fill all details")
        }else{
            let obj={
                name,
                category,
                difficulty,
                limit
            }
            dispatch(getData(obj))
            localStorage.setItem("name", name)
            setname("")
            setcategory("")
            setdifficulty("")
            setlimit("")
            navigate("/quiz")
        }
    }

return (

       <Box>
       <Heading>Set Up Your Quiz</Heading>
       <br />
       <Box w={"80%"} m={"auto"}>
                 <FormControl isRequired>
                  <Input value={name} onChange={(e)=>{
                    setname(e.target.value)
                }} placeholder="enter your name"/>
                </FormControl>
                <br />
                <FormControl isRequired>
                    <Select value={category} onChange={(e)=>{
                        setcategory(e.target.value)
                    }} placeholder="select Category">
                       <option>General Knowledge</option>
                       <option>Sports</option>
                       <option>Geography</option>
                    </Select>
                </FormControl>
                <br />
                <FormControl isRequired>
                    <Select value={difficulty} onChange={(e)=>{
                        setdifficulty(e.target.value)
                    }} placeholder="select difficulty">
                       <option>easy</option>
                       <option>medium</option>
                       <option>hard</option>
                    </Select>
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Input value={limit} onChange={(e)=>{
                    setlimit(e.target.value)
                }}  placeholder="enter limit"/>
                </FormControl>

                <br />

                <Button onClick={handleSubmit}>START QUIZ</Button>
       </Box>
       </Box>
)
    
    


}