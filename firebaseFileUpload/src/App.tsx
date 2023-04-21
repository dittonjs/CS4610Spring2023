import { ChangeEvent, useState } from 'react'
import { storage } from './lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './App.css'

function App() {
  const [url, setUrl] = useState('');
  async function uploadFile(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    const fileRef = ref(storage, `/userfiles/${file!.name || ''}`)
    const snapshot = await uploadBytes(fileRef, file!);

    // likely in different place
    const downloadUrl = await getDownloadURL(ref(storage, `/userfiles/${file!.name || ''}`));
    setUrl(downloadUrl);
  }

  return (
    <>
      <input type="file" onChange={uploadFile}/>
      {url && (
        <img src={url} alt="my image" />
      )}
    </>
  )
}

export default App
