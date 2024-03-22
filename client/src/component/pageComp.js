import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/pageitem.css'
import PageItem from './pageItem';

const Page = observer(() => {

  const {device} = useContext(Context)

  let pageCount = Math.ceil(device.totalCount / 2)
  let pages = []

  for(let i = 0; i < pageCount; i++){
    pages.push(i + 1)
  }

  if(pages.length === 1){
    device.setPage(1)
  }

  return (
        <div className='Pages'>
            {pages.map(page => <PageItem page={page}/>)}
        </div>
  );

})

export default Page;