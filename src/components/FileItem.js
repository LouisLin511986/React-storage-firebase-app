import React from "react";
import './FileItem.css';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({id, caption, timestamp, fileUrl, size}) => {
    /*
    这个变量用于格式化文件的时间戳信息，以便在界面上显示。
    它使用了模板字符串的语法，包含了三个部分，分别是文件的日、月和年。在这个字符串中，
    ${} 内的表达式用于获取时间戳的相关信息。timestamp?.toDate() 
    用于将 Firebase 的时间戳对象转换为 JavaScript 的 Date 对象。
    然后，getDate() 获取日期，getMonth() 获取月份，
    并且由于 JavaScript 中月份是从 0 开始的，所以 + 1 用于将月份转换为正常的表示。
    最后，${} 内的内容被插入到字符串中，以形成格式化后的日期字符串。
    */
    const fileDate = `
        ${timestamp?.toDate().getDate()}
        ${monthNames[timestamp?.toDate().getMonth() + 1]}
        ${timestamp?.toDate().getFullYear()}
        `;

    /*
    这个函数用于将文件大小从字节（bytes）转换为更易读的单位，例如千字节（kB）
    、兆字节（MB）、千兆字节（GB）等。函数接受一个文件大小（以字节为单位）作为参数，
    并通过循环将其转换为适当的单位。在每次循环中，文件大小除以 1024（2^10），
    并且 i 递增，直到文件大小小于 1024 为止。最后，函数返回带有一位小数的字符串表示形式，
    以及适当的单位，例如 "1.2 MB"。
    */
    const readableFileSizeStr = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = ['kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        }
        while(fileSizeInBytes > 1024);
        
        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };
    
    return (
        <div className="fileItem">
            <a
                href={fileUrl}
                target="_blank"
                rel="noreferrer"
                download>
                <div className="fileItem--left">
                    <InsertDriveFileIcon />
                    <p>{caption}</p>
                </div>
                <div className="fileItem--right">
                    <p>{fileDate}</p>
                    <p>{readableFileSizeStr(size)}</p>
                </div>
            </a>
        </div>
    )
}

export default FileItem