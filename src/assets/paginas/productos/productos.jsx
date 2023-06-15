import { useFetch } from "../../../useFetch"
import Progreso from "../../componetes/progreso/progreso"
import { Card, Stack,Heading,Text,Button,Image, CardBody, CardFooter } from '@chakra-ui/react'
import "./productos.css"

 function Productos() {
  const {data, loading, error} = useFetch('https://fakestoreapi.com/products')
  

  return (
    <div className='productos'>
      <div className="card">
          {error && <li>Error: {error}</li>}
          {loading && <Progreso/>}
          {data?.map((product)=>(
            
            <div className="sepa">
              <Card
             direction={{ base: 'column', sm: 'row' }}
             overflow='hidden'
            variant='outline'
>              
               <Image maxW={{ base: '100%', sm: '200px' }}
            src={product.image}
             
  />

               <Stack>
              <CardBody>
                <Heading size='md' fontSize='20px' fontWeight='1000' marginTop='10px' marginLeft='15px'>{product.title}</Heading>

                  <Text py='15'marginLeft='10px'>
                    {product.description}
                </Text>
               </CardBody>

               <CardFooter> 
                 <Button variant='solid' backgroundColor='#0E8388' color='white' padding='10px' width='65px' marginLeft='50px'>
                 {product.price}
               </Button>
              </CardFooter>
               </Stack>
           </Card>
           </div>
          ))}
        
      </div>
    </div>
  )
}
export default Productos
