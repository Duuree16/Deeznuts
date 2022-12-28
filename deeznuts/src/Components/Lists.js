import axios from 'axios'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Providers/DataProvider'
import styles from './Designs/design.module.css'

export const List = (props) => {
  const {setPlaylistData} = useContext(DataContext)
  const deleteList = () => {
    axios.delete('http://localhost:3001/list/'+props._id)
      .then((res)=>{
        axios.get('http://localhost:3001/lists')
          .then((res)=>{
            setPlaylistData(res.data)
          })
      })
  }

  return (
    <div className={styles.List}>
      <Link to={'/playlist/' + props._id} style={{ textDecoration: 'none' }}>
        <h5 className={styles.title}>{props.title}</h5>
      </Link>
      <p className={styles.creator}>{props.creator}</p>
      <p className={styles.deleter} onClick={deleteList}>Delete</p>
    </div>
  )
}
