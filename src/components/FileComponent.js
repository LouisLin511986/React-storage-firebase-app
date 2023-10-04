import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import './FileComponent.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { storage, db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles"; //用于创建 CSS 样式的工具函数
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

const useStyles = makeStyles((theme) => ({ //定义一个弹出窗口（modal）的样式
    paper:{ //创建了一个名为 paper 的样式类，它包含了一些用于控制弹出窗口样式的属性。
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow:theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}))

const FileComponent = () => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

// 通过 e.target.files[0] 获取到用户选择的文件对象，并将其存储在组件的 file 状态中，以便后续上传使用。
const handleChange = (e) => {
    if (e.target.files[0]){
        setFile(e.target.files[0]);
    }
}

// 这个组件的主要作用是创建一个上传文件的界面，用户可以选择文件并上传到 Firebase Storage，
// 同时将文件的相关信息保存到 Firestore 数据库中。上传过程中会显示上传状态。
const handleUpload = () => {
    setUploading(true);
    
    // 这行代码上传文件到 Firebase Storage，并将文件保存在 files 文件夹下，文件名为原始文件名 file.name。
    storage.ref(`files/${file.name}`).put(file).then(snapshot => {
        console.log(snapshot);

        // 使用 getDownloadURL 方法获取上传后文件的下载链接 url，
        // 并将文件相关信息存储到 Firebase Firestore 数据库的 myFiles 集合中。
        storage.ref('files').child(file.name).getDownloadURL().then(url => {

            // 这行代码使用 add 方法向 Firestore 数据库的 myFiles 集合中添加一条文档记录，包括以下字段：
            db.collection('myFiles').add({
                // 使用 firebase.firestore.FieldValue.serverTimestamp() 来获取服务器的时间戳，表示文件上传的时间。
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: file.name,
                fileUrl: url,
                // 文件的大小，从上传快照的 _delegate.bytesTransferred 获取。
                size: snapshot._delegate.bytesTransferred,
            })
            setUploading(false);
            setOpen(false);
            setFile(null);
        })
    })

    // 它用于获取上传文件的元数据信息，但似乎没有被使用到。
    storage.ref('files').child(file.name).getMetadata().then(meta => console.log(meta.size));
}

    return (
        <div className="file">
            <div className="file__container" onClick={handleOpen}>
                <AddIcon fontSize="large" />
                <p>New</p>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
             >
             <div style={modalStyle} className={classes.paper}>
                <p>Select files you want to upload !</p>
                {
                    uploading ? (<p>uploading...</p>) : (<><input type="file" onChange={handleChange} /><button onClick={handleUpload}>upload</button></>)
                }
             </div>
            </Modal>
        </div>
    )
}

export default FileComponent;