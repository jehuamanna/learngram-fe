import React, { useEffect, useState, useRef } from "react";
import { Navbar } from "../../common/components/navbar/navbar";
import { VideoThumbnail } from "./video-thumbnail";
import { createVideo, listVideos } from "../../common/actions/video";
import {
  InputArea,
  StyledInput,
  StyledLabel,
  UploadButton,
  ClearButton,
  VideoArea,
  VideoListArea,
  Empty,
} from './styled-components'
export const LandingPage = () => {

  const FILE_SIZE_LIMIT = 1024*1024;

  const videoRef = useRef(null)
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileSource, setFileSource] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blockActions, setBlockActions] = useState(false);
  const [videos, setVideos] = useState([]);
  const [originalVideos, setOriginalVideos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { success, data}  = await listVideos()
      if(success){
        console.log(data)
        setVideos(data.videos)
        setOriginalVideos(data.videos)
      }
    }

    fetchData()
  }, [])
  
  
  const handleSearch = (e) => {
    const searchKey = e.target.value
    setFileName(searchKey)
    const filteredVideos = originalVideos.filter(video => video.fileName.toLowerCase().includes(searchKey.toLowerCase()))
    setVideos(filteredVideos)
  }


  const handleFileUpload = e => {
    const file = e.target.files[0];
    if (file.size/FILE_SIZE_LIMIT > 200) {
      alert("File size cannot be greater than 200MB");
      return;
    }
    setFile(file);
  }
  
  const handleVideoClick = (title, url, type) => {
    setFileName(title);
    setFileSource(url);
    setFileType(type);
    videoRef && videoRef.current && videoRef.current.load()
  }

  const handleClear = () => {
    setFileName('');
    setFileSource(null);
    setFileType(null);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    const {success, data} = await createVideo(formData)
    if(success) {
      console.log(data)
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar />
      <InputArea>
        <StyledInput value={fileName} onChange={handleSearch} />
        <>
          <input type="file" id="actual-btn" accept="video/*" onChange={handleFileUpload} hidden/>
          {!fileSource
            ? <StyledLabel for="actual-btn">Upload Lecture</StyledLabel>
            : (
              <>
                <UploadButton onClick={uploadFile} disabled={loading || blockActions} >
                  {loading ? 'Uploading...' : 'Upload'}
                </UploadButton>
                <ClearButton onClick={handleClear} disabled={loading || blockActions}>
                  Clear
                </ClearButton>
              </>
            )
          }
        </>
      </InputArea>
      {fileSource
      && (
        <VideoArea>
          <video ref={videoRef} width={800} height={500} controls>
            <source src={fileSource} type={fileType} />
          </video>
        </VideoArea>
      )}
      <VideoListArea>
        {videos.length > 0
          ? videos.map(({ _id, fileName, location, mimetype}) => (
              <VideoThumbnail
                key={_id}
                title={fileName}
                onClick={() => handleVideoClick(fileName, location, mimetype)}
              />
            )
          )
          : <Empty>No videos to display</Empty>
        }
      </VideoListArea>
    </div>
  );
}
