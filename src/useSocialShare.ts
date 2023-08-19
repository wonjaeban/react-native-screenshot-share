import React, {useRef} from 'react';
import Share from 'react-native-share';

const useSocialShare = () => {
  const shareImage = (url: string) => {
    Share.open({url})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  return {shareImage};
};

export default useSocialShare;
