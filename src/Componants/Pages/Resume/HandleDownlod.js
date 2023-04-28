
import { saveAs } from 'file-saver';

const downloadFile = () => {
    const filename = 'Irshad_resume.pdf'; // the name of the file you want to download
    const file = 'Irshad_resume.pdf'; // the path to the file you want to download
    window.open("https://drive.google.com/file/d/1hGJuXGIR5Y2q667O77Tdqh2VD9OwDc7U/view?usp=sharing", "_blank")
    fetch(file)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, filename);
      })
      .catch((error) => console.error(error));
  };

  export default downloadFile;