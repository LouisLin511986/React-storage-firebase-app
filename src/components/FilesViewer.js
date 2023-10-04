import React, { useEffect, useState } from "react"
import './FilesViewer.css'
import { db } from '../firebase'
import FileItem from './FileItem'
import FileCard from "./FileCard"

const FilesViewer = () => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    return (
        <div className="fileViewer">
            <div className="fileViewer__row">
                {
                    files.slice(0, 5).map(( item ) => (
                        <FileCard key={item.id} name={item.item.caption} />
                    ))
                }
            </div>
            <div className="fileViewer__titles">
                <div className="fileViewer__titles--left">
                    <p>Name</p>
                </div>
                <div className="fileViewer__titles--right">
                    <p>Last modified</p>
                    <p>File size</p>
                </div>
            </div>
            {
                files.map((item) => (
                    <FileItem
                        key={item.id} // 添加唯一的 key 属性
                        id={item.id}
                        caption={item.item.caption}
                        timestamp={item.item.timestamp}
                        fileUrl={item.item.fileUrl}
                        size={item.item.size}
                    />
                ))
            }
        </div>
    )
}

export default FilesViewer