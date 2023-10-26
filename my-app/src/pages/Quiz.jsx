import { Box, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Quizlist } from "../components/QuizList";
export const Quiz=()=>{
    const store=useSelector((store)=>store.reducer)
    console.log(store)
    return(
        <Box>
            {
                store.isLoading?<Box margin={"auto"} height={"100vh"}>
                   <Spinner size={"xl"}/>
                </Box>:<Box display={"flex"} justifyContent={'center'} alignItems={'center'}>
                    <Quizlist/>
                </Box>

            }
            
        </Box>
    )
}