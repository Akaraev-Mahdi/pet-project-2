import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/pageitem.css'

const PageItem = observer(({page}) => {

    const {device} = useContext(Context)

  return (
    <div onClick={() => device.setPage(page)} className={`page ${page === device.page ? 'active' : ''}`}>
        {page}
    </div>
  );
})

export default PageItem;