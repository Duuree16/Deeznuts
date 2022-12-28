import {useParams } from 'react-router-dom'
import styles from './Designs/design.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const ListSongs = (props) => {
  const parama = useParams()
  const [data,setData] = useState()
  useEffect(() => {
    
    axios.get('http://localhost:3001/list/' + parama.id)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

    return (data && 
            <div className={styles.ListSong}>
                <h2 className={styles.Title}>{data.title}</h2>
                {
                    data.songs.map((element,index)=> 
                    <div className={styles.singleSong}>
                        <h5 className={styles.num}>{index + 1}.</h5>
                        <div>
                            <h6 className={styles.songname}>{element.name}</h6>
                            <p className={styles.arter}>{element.artist}</p>
                        </div>
                    </div>)
                }
            </div>
    )

}
