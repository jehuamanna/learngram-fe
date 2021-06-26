import React, { useEffect, useState } from "react";
import { Navbar } from "../../common/components/navbar/navbar";
import { VideoThumbnail } from "./video-thumbnail";
import { createVideo, listVideos, deleteVideo } from "../../common/actions/video";
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

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileSource, setFileSource] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blockActions, setBlockActions] = useState(false);
  const [videos, setVideos] = useState([]);

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
  }

  const handleVideoDelete = async (id) => {
    setLoading(true);
    const { success } = await deleteVideo(id);
    success && alert("Video deleted successfully!");
    handleClear();
  };

  const handleVideoClick = (title, url, type) => {
    setFileName(title);
    setFileSource(url);
    setFileType(type);
  }

  const handleClear = () => {
    setFileName('');
    setFileSource(null);
    setFileType(null);
  };

  return (
    <div>
      <Navbar />
      <InputArea>
        <StyledInput value={fileName} onChange={e => setFileName(e.target.value)} />
        <>
          <input type="file" id="actual-btn" accept="video/*" onChange={handleFileUpload} hidden/>
          {!fileSource
            ? <StyledLabel for="actual-btn">Upload Lecture</StyledLabel>
            : (
              <>
                <UploadButton onClick={() => {}} disabled={loading || blockActions} >
                  {loading ? 'Uploading...' : 'Upload to DB'}
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
          <video width={800} height={500} controls>
            <source src={fileSource} type={fileType} />
          </video>
        </VideoArea>
      )}
      <VideoListArea>
        {videos.length > 0
          ? videos.map(({ _id, title, storage_url, content_type }) => (
              <VideoThumbnail
                key={_id}
                title={title}
                deleteAction={() => handleVideoDelete(_id)}
                onClick={() => handleVideoClick(title, storage_url, content_type)}
              />
            )
          )
          : <Empty>No videos to display</Empty>
        }
      </VideoListArea>
    </div>
  );
}
