import React, { useEffect, useState, useRef, useContext } from "react";
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
  Input,
  Container,
  VideoDisplayArea,
  UploadingLoader,
} from './styled-components'
import { LEARNGRAM_ACCESS_KEY } from "../../common/constants/constants";
import SearchIcon from '../../common/assets/icons/search.svg'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../common/contexts/auth-context";
import Loader from "react-loader-spinner";


export const LandingPage = () => {

  const FILE_SIZE_LIMIT = 1024*1024;
  const { isFromLoginPage, setIsFromLoginPage } = useContext(AuthContext);

  const videoRef = useRef(null)
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileSource, setFileSource] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [originalVideos, setOriginalVideos] = useState([])
  const [isUploading, setIsUploading] = useState(false)

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
  
  useEffect(() => {
    if(isFromLoginPage){
      toast.success("Logged In Successfully")
      setIsFromLoginPage(false)
    }
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
    setFileSource(URL.createObjectURL(file));
    setFileType(file.type);
    setFileName(file.name);
    setIsUploading(true)
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
    setVideos(originalVideos)
  };

  const uploadFile = async () => {
    setLoading(true)
    const formData = new FormData();
    formData.append('file', file);
    const {success, data} = await createVideo(formData)
    if(success) {
      console.log(data)
      toast.success("Video Added Successfully")
      setLoading(false)
      setIsUploading(false)
      setVideos(data.videos)
      setOriginalVideos(data.videos)
      setFileName('');
      setFileSource(null);
      setFileType(null);
    }
  }

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Container>
        <InputArea>
          <Input>
            <ClearButton onClick={handleClear}>{fileName ? "X": <img src={SearchIcon} alt="search"/>} </ClearButton>
            <StyledInput value={fileName} onChange={handleSearch} />
          </Input>
          <>
            <input type="file" id="actual-btn" accept="video/*" onChange={handleFileUpload} hidden/>
            {!isUploading
              ? <StyledLabel for="actual-btn">Upload Lecture</StyledLabel>
              : (
                <>
                  <UploadButton onClick={uploadFile}  >
                    {loading ? 
                    <>
                      <div>Uploading</div>
                      <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={30}
                        width={30}
                      />  
                      </> :
                    'Upload'}
                  </UploadButton>
                </>
              )
            }
          </>
        </InputArea>
        <VideoDisplayArea>
          <SimpleBar style={{ maxHeight: 650 }}>
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
          </SimpleBar>
        </VideoDisplayArea>
      </Container>
    </div>
  );
}
