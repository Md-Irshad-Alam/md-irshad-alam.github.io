
import { saveAs } from 'file-saver';

const downloadFile = () => {
    const filename = 'Irshad_resume.pdf'; // the name of the file you want to download
    const file = './Irshad_resume.pdf'; // the path to the file you want to download
    saveAs(file, filename);
 
  };

  export default downloadFile;