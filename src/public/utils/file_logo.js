import FileImg from "../images/logo/file/file.ico"
import FileimgImg from "../images/logo/file/fileimg.ico"
/*
 * 根据文件类型转化为图标路径
 * @param string type 文件类型
 */

export const file_logo = (type) => {
  switch (type) {
    case 'file':
      return FileImg
    case 'fileimg':
      return FileimgImg
    default:
      return FileImg
  }
}