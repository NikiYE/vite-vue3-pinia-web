import { defineStore } from 'pinia';
import axios from "./../utils/http";

export interface Book {
  id: string;
  name: string;
  startUploadTime: string;
  takeHowLong: string;
  md5: string;
  progress: number;
  updateElapsedTime: boolean;
  uploadSucces: boolean;
  totalElapsedTime: string;
  status: '上传中' | '上传成功' | '上传失败';
  result?: any;
}

export const useBookUploadStore = defineStore('uploadStore', {
  state: () => ({
    books: [] as Book[],
  }),

  actions: {
    // 添加书籍到列表
    storeAddBook(id: string, name: string, md5: string) {
      this.books.push({
        id,
        name,
        startUploadTime: '',
        md5,
        progress:0,
        takeHowLong: '',
        updateElapsedTime: true,
        totalElapsedTime: '',
        status: '上传中',
      });
    },

    // 通过书名查找书籍的ID
    getBookIdByName(name: string) {
      console.log("查找重名")
      console.log(this.books.find(book => book.name === name))
      const book = this.books.find(book => book.name === name);
      return book ? book.id : null;
    },

    // 开始上传
    startUploading(id: string) {
      const book = this.books.find(b => b.id === id);
      if (book) {
        book.status = '上传中';
        book.result = '';
        console.log(book)
        book.startUploadTime = new Date().toLocaleString();
      }
    },

    // 计算上传时长并更新状态
    elapsedTime(id: string) {
      const book = this.books.find(b => b.id === id);
      if (book && book.startUploadTime) {
        const uploadTimestamp = new Date(book.startUploadTime).getTime();
        const currentTimestamp = new Date().getTime();
        const elapsedTimeInSeconds = Math.floor((currentTimestamp - uploadTimestamp) / 1000);
        console.log(elapsedTimeInSeconds)
        // 根据上传时间长度设置 takeHowLong 字段
        if (elapsedTimeInSeconds < 60) {
          // book.takeHowLong = '1分钟以内';
          book.takeHowLong = `${elapsedTimeInSeconds}秒`;
        } else if (elapsedTimeInSeconds < 3600) {
          const minutes = Math.floor(elapsedTimeInSeconds / 60);
          book.takeHowLong = `${minutes}分钟`;
        } else {
          const hours = Math.floor(elapsedTimeInSeconds / 3600);
          const remainingMinutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
          book.takeHowLong = `${hours}小时${remainingMinutes}分钟`;
        }

        // 更新 calculateAndStoreTotalElapsedTime 方法内的逻辑，不再调用 updateAllElapsedTimes
        if (book.updateElapsedTime !== false) {
          // this.updateAllElapsedTimes();
        }
      }
    },

    // 更新所有书籍的上传时长
    updateAllElapsedTimes() {
      console.log(this.books)
      for (const book of this.books) {
        console.log(book.id)
        this.elapsedTime(book.id);
      }
    },

    // 通过MD5获取进度
    getUpdateProgress() {
      // console.log(this.books)
      for (const book of this.books) {
        console.log(book.md5)
      if (book.status == '上传中') { // 检查状态是否为“成功”
          axios.get(`/api/knowledge/books/getPrecent/${book.md5}`)
          .then((response) => {
            console.log(response)
            if (response.data.code == 200 ){
              book.progress = `${response.data.data}`|| 0
            } else {
              book.progress = 0
            }
          })
          .catch(error => {
            console.log(error)
          })
        }
      }
    },

    // 上传成功
    completeUpload(id: string) {
      const book = this.books.find(b => b.id === id);
      if (book) {
        book.status = '上传成功';
        book.result = '';
        book.updateElapsedTime = false;
        this.updateAllElapsedTimes();
        book.elapsedTime = false;
        book.totalElapsedTime = book.takeHowLong;
        book.uploadSucces = true
      }
      console.log(this.books)
    },

    // 上传失败
    failUpload(id: string, result: any) {
      const book = this.books.find(b => b.id === id);
      if (book) {
        book.status = '上传失败';
        book.result = result;
        book.updateElapsedTime = false;
        book.elapsedTime = false;
        this.updateAllElapsedTimes();
        book.totalElapsedTime = book.takeHowLong;
      }
      console.log(this.books)
    },

    // 从本地存储中恢复状态
    restoreState() {
      const storedState = localStorage.getItem('uploadStore');
      if (storedState) {
        Object.assign(this, JSON.parse(storedState));
      }
    },

    // 将状态持久化到本地存储
    persistState() {
      localStorage.setItem('uploadStore', JSON.stringify(this));
    },
  },
}) as any;
