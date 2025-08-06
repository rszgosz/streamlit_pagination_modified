import {
  ComponentProps,
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode,useState } from "react"
import { Pagination } from '@material-ui/lab'

const PaginationComponent:React.FC<ComponentProps> = (props) => {

  const { dataLength, layout,default: initialPage } = props.args

  const [pages, setPages] = useState(initialPage+1 || 1)



  const handlePageChange = (event:React.ChangeEvent<HTMLInputElement>, page:number) => {

    setPages(page)
    Streamlit.setComponentValue(page-1)
    console.log(page)
  }

  return (      
        <Pagination count={dataLength-1} page={pages} onChange={handlePageChange} {...layout}/> 
  )
}

export default withStreamlitConnection(PaginationComponent) 
