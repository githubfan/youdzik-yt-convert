import axios from 'axios';

const BASE_URL = 'https://box-myserver.unubo.app/api/yt';

export default class YtConvert {

  static async getStreamInfo (inputVal) {
    const url = `${BASE_URL}/media/info?url=${inputVal}`;
    const result = await axios.get(url);
    const data = await result.data;
    return data;
  }

  static async ytToMp3 (inputVal) {
    const END_POINT = `${BASE_URL}/mp3/download?url=${inputVal}`;
    const response = await axios({
      method: 'GET',
      responseType: 'arraybuffer',
      url: END_POINT,
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
    const data = await response.data;
    return data;
  }

  static async ytToMp4 (inputVal) {
    const END_POINT = `${BASE_URL}/mp4/download?url=${inputVal}`;
    const response = await axios({
      method: 'GET',
      responseType: 'arraybuffer',
      url: END_POINT,
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
    const data = await response.data;
    return data;
  }

  static downloadAudio(inputVal) {
    return `${BASE_URL}/mp3/download?url=${inputVal}`;
  }

  static downloadVideo(inputVal) {
    return `${BASE_URL}/mp4/download?url=${inputVal}`;
  }
} 